const API_BASE_URL = 'http://localhost:5000/api';

// Fetch all posts from the Express backend on load
document.addEventListener('DOMContentLoaded', fetchPosts);

async function fetchPosts() {
  try {
    const response = await fetch(`${API_BASE_URL}/posts`);
    const data = await response.json();
    if (data.success) {
      renderPosts(data.posts);
    }
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

function renderPosts(posts) {
  const postsContainer = document.getElementById('postsContainer');
  postsContainer.innerHTML = '';

  posts.forEach(post => {
    const postCard = document.createElement('div');
    postCard.className = 'card post';
    postCard.innerHTML = `
      <div class="post-header">
        <div class="user-avatar"><i class="fa-solid fa-users"></i></div>
        <div class="post-meta">
          <h4>Sangguniang Kabataan Council <i class="fa-solid fa-circle-check verified"></i></h4>
          <span>${post.timestamp} • <i class="fa-solid fa-earth-americas"></i></span>
        </div>
      </div>
      <div class="post-body">
        <p><span style="background: #e7f3ff; color: #1877f2; padding: 2px 8px; border-radius: 4px; font-weight: bold; font-size: 12px;">#${post.category}</span></p>
        <p style="margin-top: 6px;">${escapeHTML(post.content)}</p>
      </div>
      <div class="post-stats">
        <span><i class="fa-solid fa-thumbs-up"></i> ${post.likes} Likes</span>
        <span>${post.comments.length} Comments • 0 Shares</span>
      </div>
      <div class="post-actions">
        <button onclick="toggleLike(this)"><i class="fa-regular fa-thumbs-up"></i> Like</button>
        <button onclick="focusComment(this)"><i class="fa-regular fa-comment"></i> Comment</button>
        <button><i class="fa-solid fa-share"></i> Share</button>
      </div>
      <div class="comments-section" style="margin-top: 10px;">
        <div class="comment-box">
          <input type="text" class="comment-input" placeholder="Write a comment..." onkeypress="handleComment(event, this)" style="width: 100%; padding: 8px 12px; border-radius: 20px; border: 1px solid #e4e6eb; background-color: #f0f2f5; outline: none;"/>
        </div>
        <div class="comments-list"></div>
      </div>
    `;
    postsContainer.appendChild(postCard);
  });
}

// Publish new post to Backend API
async function submitSKPost() {
  const postInput = document.getElementById('postInput');
  const categorySelect = document.getElementById('postCategory');
  const content = postInput.value.trim();

  if (!content) {
    alert('Please enter an announcement or update.');
    return;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/posts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ category: categorySelect.value, content })
    });

    const result = await response.json();
    if (result.success) {
      postInput.value = '';
      fetchPosts(); // Refresh post feed
    }
  } catch (error) {
    console.error('Error posting update:', error);
  }
}

// Submit Youth Registration to Backend API
async function handleSKRegistration(event) {
  event.preventDefault();

  const registrationData = {
    name: document.getElementById('regName').value,
    age: document.getElementById('regAge').value,
    purok: document.getElementById('regPurok').value,
    activity: document.getElementById('regActivity').value
  };

  try {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(registrationData)
    });

    const result = await response.json();
    if (result.success) {
      alert(result.message);
      closeModal('skRegistrationModal');
      event.target.reset();
    }
  } catch (error) {
    console.error('Error registering:', error);
  }
}

// Helper functions
function toggleLike(btn) {
  btn.classList.toggle('liked');
  const icon = btn.querySelector('i');
  icon.className = btn.classList.contains('liked') ? 'fa-solid fa-thumbs-up' : 'fa-regular fa-thumbs-up';
  btn.style.color = btn.classList.contains('liked') ? '#1877f2' : '#65676b';
}

function focusComment(btn) {
  btn.closest('.post').querySelector('.comment-input').focus();
}

function handleComment(event, input) {
  if (event.key === 'Enter' && input.value.trim()) {
    const commentsList = input.closest('.comments-section').querySelector('.comments-list');
    const comment = document.createElement('div');
    comment.style.cssText = 'background: #f0f2f5; padding: 8px 12px; border-radius: 12px; margin-top: 6px; font-size: 13px;';
    comment.innerHTML = `<strong>Youth Resident:</strong> ${escapeHTML(input.value.trim())}`;
    commentsList.appendChild(comment);
    input.value = '';
  }
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag));
}

function openModal(id) { document.getElementById(id).style.display = 'flex'; }
function closeModal(id) { document.getElementById(id).style.display = 'none'; }

window.onclick = function(e) {
  if (e.target.classList.contains('modal')) e.target.style.display = 'none';
};