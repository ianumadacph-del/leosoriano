<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Sangguniang Kabataan - Brgy. San Bartolome</title>
  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>
  <style>
    /* ==========================================
       GLOBAL DARK MODE & RED VIBE STYLES
       ========================================== */
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }

    body {
      background-color: #080808 !important;
      color: #e4e6eb !important;
      padding-top: 60px;
    }

    /* Top Navbar */
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 56px;
      background-color: #121212;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 16px;
      border-bottom: 2px solid #e50914;
      box-shadow: 0 2px 15px rgba(229, 9, 20, 0.3);
      z-index: 1000;
    }

    .nav-left {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .fb-logo {
      color: #e50914;
      font-size: 38px;
      text-shadow: 0 0 12px rgba(229, 9, 20, 0.6);
    }

    .search-bar {
      background-color: #1f1f1f;
      padding: 8px 14px;
      border-radius: 50px;
      display: flex;
      align-items: center;
      gap: 8px;
      color: #b0b3b8;
      border: 1px solid #333333;
    }

    .search-bar input {
      border: none;
      background: transparent;
      outline: none;
      font-size: 14px;
      color: #ffffff;
    }

    .search-bar input::placeholder {
      color: #888888;
    }

    .nav-center {
      display: flex;
      height: 100%;
    }

    .nav-tab {
      padding: 0 28px;
      display: flex;
      align-items: center;
      font-size: 22px;
      color: #777777;
      cursor: pointer;
      border-bottom: 3px solid transparent;
      transition: all 0.2s ease;
    }

    .nav-tab:hover {
      color: #ff1e27;
    }

    .nav-tab.active {
      color: #e50914;
      border-bottom-color: #e50914;
      filter: drop-shadow(0 0 8px rgba(229, 9, 20, 0.8));
    }

    .nav-right {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .icon-btn, .user-avatar-sm {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .icon-btn {
      background-color: #1f1f1f;
      color: #e4e6eb;
      border: 1px solid #333333;
    }

    .icon-btn:hover {
      background-color: #e50914;
      color: #ffffff;
      box-shadow: 0 0 10px rgba(229, 9, 20, 0.6);
    }

    .user-avatar-sm {
      background-color: #e50914;
      color: white;
      box-shadow: 0 0 8px rgba(229, 9, 20, 0.5);
    }

    /* Container & Profile Area */
    .container {
      max-width: 1050px;
      margin: 0 auto;
      padding: 0 16px;
    }

    .profile-header {
      background-color: #121212;
      border-radius: 0 0 12px 12px;
      border: 1px solid #282828;
      border-top: none;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
      margin-bottom: 16px;
      overflow: hidden;
    }

    .cover-photo {
      height: 250px;
      background: linear-gradient(135deg, #000000 0%, #4a0000 50%, #e50914 100%);
      border-radius: 0 0 8px 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }

    .cover-text {
      font-size: 26px;
      font-weight: bold;
      letter-spacing: 1px;
      text-align: center;
      text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.9);
      color: #ffffff;
    }

    .profile-info-bar {
      display: flex;
      padding: 0 32px 16px 32px;
      position: relative;
      align-items: flex-end;
      gap: 16px;
    }

    .profile-pic-container {
      margin-top: -60px;
    }

    .profile-pic-img {
      width: 140px;
      height: 140px;
      border-radius: 50%;
      border: 4px solid #121212;
      object-fit: cover;
      background-color: #121212;
      box-shadow: 0 0 20px rgba(229, 9, 20, 0.5);
    }

    .avatar-img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
      border: 1px solid #e50914;
    }

    .profile-details h1 {
      font-size: 24px;
      color: #ffffff;
    }

    .verified {
      color: #e50914;
      margin-left: 4px;
    }

    .followers-count {
      color: #b0b3b8;
      margin-top: 4px;
      font-size: 14px;
    }

    .action-buttons {
      display: flex;
      gap: 8px;
      margin-top: 12px;
      flex-wrap: wrap;
    }

    .btn {
      padding: 8px 16px;
      border-radius: 6px;
      border: none;
      font-weight: 600;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 14px;
      transition: all 0.2s ease;
    }

    .btn-primary {
      background-color: #e50914;
      color: #ffffff;
      box-shadow: 0 0 12px rgba(229, 9, 20, 0.5);
    }

    .btn-primary:hover {
      background-color: #ff1e27;
      box-shadow: 0 0 18px rgba(229, 9, 20, 0.8);
    }

    .btn-secondary {
      background-color: #222222;
      color: #e4e6eb;
      border: 1px solid #333333;
    }

    .btn-secondary:hover {
      background-color: #333333;
      color: #ffffff;
    }

    .page-tabs {
      display: flex;
      border-top: 1px solid #222222;
      padding: 0 32px;
      overflow-x: auto;
    }

    .page-tabs .tab {
      padding: 14px 16px;
      font-weight: 600;
      color: #b0b3b8;
      cursor: pointer;
      border-bottom: 3px solid transparent;
      white-space: nowrap;
    }

    .page-tabs .tab.active {
      color: #e50914;
      border-bottom-color: #e50914;
    }

    /* Main Grid Layout */
    .main-content {
      display: grid;
      grid-template-columns: 360px 1fr;
      gap: 16px;
    }

    @media (max-width: 768px) {
      .main-content {
        grid-template-columns: 1fr;
      }
    }

    .card {
      background-color: #121212;
      border-radius: 12px;
      padding: 16px;
      margin-bottom: 16px;
      border: 1px solid #222222;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6);
    }

    .sidebar-left h3 {
      margin-bottom: 12px;
      font-size: 16px;
      color: #ffffff;
    }

    .intro-desc {
      color: #b0b3b8;
      font-size: 14px;
      margin-bottom: 12px;
      line-height: 1.4;
    }

    .info-list, .emergency-list {
      list-style: none;
    }

    .info-list li, .emergency-list li {
      margin-bottom: 10px;
      color: #e4e6eb;
      font-size: 14px;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .info-list i {
      color: #e50914;
      width: 18px;
    }

    .emergency-card {
      border-left: 4px solid #e50914;
      background: linear-gradient(135deg, #1c0505 0%, #121212 100%);
    }

    .emergency-card h3 {
      color: #e50914;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    /* Feed & Post Creation */
    .create-post-top {
      display: flex;
      gap: 10px;
      align-items: center;
      margin-bottom: 12px;
    }

    .create-post-top input {
      flex: 1;
      border: 1px solid #333333;
      background-color: #1c1c1c;
      color: #ffffff;
      padding: 10px 16px;
      border-radius: 50px;
      outline: none;
      font-size: 14px;
    }

    .create-post-top input::placeholder {
      color: #777777;
    }

    .create-post select {
      width: 100%;
      padding: 8px;
      border-radius: 6px;
      border: 1px solid #333333;
      background-color: #1c1c1c;
      color: #ffffff;
      margin-bottom: 10px;
      outline: none;
    }

    .create-post hr {
      border: none;
      border-top: 1px solid #222222;
      margin-bottom: 8px;
    }

    .create-post-actions {
      display: flex;
      justify-content: flex-end;
    }

    .create-post-actions button {
      background-color: #e50914;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 6px;
      font-weight: bold;
      cursor: pointer;
      box-shadow: 0 0 10px rgba(229, 9, 20, 0.4);
      transition: background-color 0.2s;
    }

    .create-post-actions button:hover {
      background-color: #ff1e27;
    }

    .post-header {
      display: flex;
      gap: 10px;
      margin-bottom: 12px;
      align-items: center;
    }

    .post-meta h4 {
      font-size: 15px;
      color: #ffffff;
    }

    .post-meta span {
      font-size: 12px;
      color: #b0b3b8;
    }

    .post-body p {
      font-size: 14px;
      line-height: 1.5;
      margin-bottom: 8px;
      color: #e4e6eb;
    }

    .post-stats {
      display: flex;
      justify-content: space-between;
      color: #b0b3b8;
      font-size: 13px;
      padding: 8px 0;
      border-bottom: 1px solid #222222;
    }

    .post-actions {
      display: flex;
      justify-content: space-around;
      padding: 4px 0;
      border-bottom: 1px solid #222222;
    }

    .post-actions button {
      flex: 1;
      background: none;
      border: none;
      padding: 8px;
      color: #b0b3b8;
      font-weight: 600;
      cursor: pointer;
      border-radius: 4px;
      font-size: 13px;
      transition: all 0.2s ease;
    }

    .post-actions button:hover {
      background-color: #1f1f1f;
      color: #e50914;
    }

    /* Comment Box Dark Styles */
    .comment-input {
      width: 100%;
      padding: 8px 12px;
      border-radius: 20px;
      border: 1px solid #333333;
      background-color: #1c1c1c;
      color: #ffffff;
      outline: none;
    }

    .comment-input::placeholder {
      color: #777777;
    }

    /* Modals Dark Mode */
    .modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.85);
      z-index: 2000;
      justify-content: center;
      align-items: center;
    }

    .modal-content {
      background-color: #121212;
      border: 1px solid #333333;
      padding: 24px;
      border-radius: 12px;
      width: 90%;
      max-width: 450px;
      position: relative;
      box-shadow: 0 4px 30px rgba(229, 9, 20, 0.3);
    }

    .modal-content h2 {
      color: #ffffff;
    }

    .close-btn {
      position: absolute;
      top: 12px;
      right: 16px;
      font-size: 24px;
      cursor: pointer;
      color: #b0b3b8;
    }

    .close-btn:hover {
      color: #e50914;
    }

    .modal form label {
      display: block;
      font-size: 13px;
      font-weight: bold;
      margin-top: 10px;
      margin-bottom: 4px;
      color: #b0b3b8;
    }

    .modal form input, .modal form select {
      width: 100%;
      padding: 8px 12px;
      border: 1px solid #333333;
      background-color: #1c1c1c;
      color: #ffffff;
      border-radius: 6px;
      font-size: 14px;
      outline: none;
    }

    .modal form input:focus, .modal form select:focus {
      border-color: #e50914;
      box-shadow: 0 0 8px rgba(229, 9, 20, 0.5);
    }

    /* Facebook-Style 5-Photo Grid Collage */
    .post-photo-grid {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: repeat(2, 180px);
      gap: 4px;
      margin-top: 12px;
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid #222222;
    }

    .post-photo-grid .grid-item {
      width: 100%;
      height: 100%;
    }

    .post-photo-grid img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .post-photo-grid .grid-item:nth-child(1),
    .post-photo-grid .grid-item:nth-child(2) {
      grid-column: span 3;
    }

    .post-photo-grid .grid-item:nth-child(3),
    .post-photo-grid .grid-item:nth-child(4),
    .post-photo-grid .grid-item:nth-child(5) {
      grid-column: span 2;
    }

    @media (max-width: 600px) {
      .post-photo-grid {
        grid-template-rows: repeat(2, 130px);
      }
    }
  </style>
</head>
<body>

  <!-- Top Navigation Bar -->
  <header class="navbar">
    <div class="nav-left">
      <div class="fb-logo"><i class="fa-brands fa-facebook"></i></div>
      <div class="search-bar">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Search SK Updates" />
      </div>
    </div>
    <div class="nav-center">
      <div class="nav-tab active"><i class="fa-solid fa-house"></i></div>
      <div class="nav-tab"><i class="fa-solid fa-users"></i></div>
      <div class="nav-tab"><i class="fa-solid fa-trophy"></i></div>
    </div>
    <div class="nav-right">
      <div class="icon-btn"><i class="fa-solid fa-bars"></i></div>
      <div class="icon-btn"><i class="fa-brands fa-facebook-messenger"></i></div>
      <div class="icon-btn"><i class="fa-solid fa-bell"></i></div>
      <div class="user-avatar-sm">
        <i class="fa-solid fa-user"></i>
      </div>
    </div>
  </header>

  <div class="container">
    <!-- Header / Cover Photo Area -->
    <div class="profile-header">
      <div class="cover-photo">
        <div class="cover-text">
          SANGGUNIANG KABATAAN - BRGY. SAN BARTOLOME<br>
          <span style="font-size: 16px; font-weight: normal; color: #f0f0f0;">Empowering the Youth, Building the Future</span>
        </div>
      </div>
      <div class="profile-info-bar">
        <div class="profile-pic-container">
          <img src="sk-logo.jpg" alt="SK San Bartolome Logo" class="profile-pic-img" />
        </div>
        <div class="profile-details">
          <h1>Sangguniang Kabataan - Brgy. San Bartolome <i class="fa-solid fa-circle-check verified"></i></h1>
          <p class="followers-count">4.5K followers • Youth Organization</p>
          <div class="action-buttons">
            <button class="btn btn-primary" onclick="openModal('skRegistrationModal')"><i class="fa-solid fa-clipboard-user"></i> Youth Registration / Sportsfest</button>
            <button class="btn btn-secondary"><i class="fa-solid fa-thumbs-up"></i> Liked</button>
          </div>
        </div>
      </div>
      <!-- Tabs Navigation -->
      <div class="page-tabs">
        <span class="tab active">Posts</span>
        <span class="tab">About</span>
        <span class="tab">Youth Programs</span>
        <span class="tab">Photos</span>
      </div>
    </div>

    <!-- Main Content Grid -->
    <div class="main-content">
      
      <!-- Left Sidebar -->
      <aside class="sidebar-left">
        <div class="card">
          <h3>About SK Council</h3>
          <p class="intro-desc">Official page of the Sangguniang Kabataan ng Brgy. San Bartolome. Dedicated to youth development, sports leagues, academic assistance, and community service.</p>
          <ul class="info-list">
            <li><i class="fa-solid fa-location-dot"></i> SK Office, Barangay Hall</li>
            <li><i class="fa-solid fa-phone"></i> SK Hotline: 0917-987-6543</li>
            <li><i class="fa-solid fa-envelope"></i> sk.sanbartolome@barangay.gov.ph</li>
          </ul>
        </div>

        <div class="card emergency-card">
          <h3><i class="fa-solid fa-shield-halved"></i> Youth Helplines</h3>
          <ul class="emergency-list">
            <li><strong>SK Chairman:</strong> 0912-345-6789</li>
            <li><strong>Barangay Hall:</strong> (02) 8888-0000</li>
            <li><strong>Emergency Police:</strong> 911</li>
          </ul>
        </div>
      </aside>

      <!-- Center Feed -->
      <main class="feed">
        <!-- Create Post Box -->
        <div class="card create-post">
          <div class="create-post-top">
            <img src="sk-logo.jpg" alt="SK Logo" class="avatar-img" />
            <input type="text" id="postInput" placeholder="What's happening in the youth community?" />
          </div>
          <select id="postCategory">
            <option value="ANNOUNCEMENT">📢 General Announcement</option>
            <option value="SPORTSFEST">🏀 Sportsfest & League</option>
            <option value="SCHOLARSHIP">🎓 Educational Assistance / Scholarship</option>
            <option value="CLEANUP">🌱 Community Clean-up Drive</option>
          </select>
          <hr/>
          <div class="create-post-actions">
            <button onclick="submitSKPost()"><i class="fa-solid fa-paper-plane"></i> Post Update</button>
          </div>
        </div>

        <!-- Feed Posts Container -->
        <div id="postsContainer">
          
          <!-- Team Hacienda Victory Post -->
          <div class="card post">
            <div class="post-header">
              <img src="sk-logo.jpg" alt="SK Logo" class="avatar-img" />
              <div class="post-meta">
                <h4>Sangguniang Kabataan - Brgy. San Bartolome <i class="fa-solid fa-circle-check verified"></i></h4>
                <span>Just now • <i class="fa-solid fa-earth-americas"></i></span>
              </div>
            </div>
            
            <div class="post-body">
              <p style="font-size: 15px; font-weight: bold; margin-bottom: 6px; color: #ffffff;">
                🏆 QUARTER-FINALS: MISSION ACCOMPLISHED! 🔥
              </p>
              <p style="color: #e4e6eb;">
                Team HACIENDA secures the WIN in the BCBL League Quarter-Finals! 💪🏀 One team, one goal, one step closer to the championship. The grind continues, and the mission is far from over.
              </p>
              <p style="font-weight: bold; margin-top: 6px; color: #ffffff;">
                HACIENDA ON TOP! 🌾👑
              </p>
              <p style="margin-top: 8px;">
                <span style="color: #e50914; font-weight: 600;">#TeamHacienda #BCBLLeague #QuarterFinals #RoadToTheChampionship</span>
              </p>

              <!-- 5-Photo Facebook Style Collage Grid -->
              <div class="post-photo-grid">
                <div class="grid-item"><img src="team1.jpg" alt="Team Photo 1" /></div>
                <div class="grid-item"><img src="team2.jpg" alt="Team Photo 2" /></div>
                <div class="grid-item"><img src="team3.jpg" alt="Team Photo 3" /></div>
                <div class="grid-item"><img src="team4.jpg" alt="Team Photo 4" /></div>
                <div class="grid-item"><img src="team5.jpg" alt="Team Photo 5" /></div>
              </div>
            </div>

            <div class="post-stats">
              <span><i class="fa-solid fa-thumbs-up" style="color: #e50914;"></i> 184 Likes</span>
              <span>42 Comments • 38 Shares</span>
            </div>

            <div class="post-actions">
              <button onclick="toggleLike(this)"><i class="fa-regular fa-thumbs-up"></i> Like</button>
              <button onclick="focusComment(this)"><i class="fa-regular fa-comment"></i> Comment</button>
              <button><i class="fa-solid fa-share"></i> Share</button>
            </div>

            <div class="comments-section" style="margin-top: 10px;">
              <div class="comment-box">
                <input type="text" class="comment-input" placeholder="Write a comment..." onkeypress="handleComment(event, this)"/>
              </div>
              <div class="comments-list"></div>
            </div>
          </div>

        </div>
      </main>

    </div>
  </div>

  <!-- Registration Modal -->
  <div id="skRegistrationModal" class="modal">
    <div class="modal-content">
      <span class="close-btn" onclick="closeModal('skRegistrationModal')">&times;</span>
      <h2><i class="fa-solid fa-clipboard-user" style="color: #e50914;"></i> SK Youth & Activity Registration</h2>
      <form onsubmit="handleSKRegistration(event)">
        <label>Full Name</label>
        <input type="text" id="regName" required placeholder="Enter your full name" />

        <label>Age</label>
        <input type="number" id="regAge" required placeholder="Must be 15 to 30 years old" min="15" max="30" />

        <label>Purok / Zone</label>
        <input type="text" id="regPurok" required placeholder="e.g., Purok 3" />

        <label>Select Activity / Program</label>
        <select id="regActivity" required>
          <option value="">-- Choose Program --</option>
          <option value="Basketball Team">SK Basketball League</option>
          <option value="Volleyball Team">SK Volleyball League</option>
          <option value="Educational Assistance">Educational Assistance / Scholarship</option>
          <option value="Youth Profiling">General SK Youth Profiling</option>
        </select>

        <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 15px;">Submit Registration</button>
      </form>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>