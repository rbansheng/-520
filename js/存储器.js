 // 用户数据存储对象
 let users = {};

 // 从 localStorage 加载用户数据
 if (localStorage.getItem('users')) {
     users = JSON.parse(localStorage.getItem('users'));
 }

 // 显示注册表单
 function showRegisterForm() {
     document.getElementById('registerFormWrapper').style.display = 'block';
     document.getElementById('loginFormWrapper').style.display = 'none';
     document.getElementById('modal').style.display = 'none';
 }

 // 显示登录表单
 function showLoginForm() {
     document.getElementById('loginFormWrapper').style.display = 'block';
     document.getElementById('registerFormWrapper').style.display = 'none';
     document.getElementById('modal').style.display = 'none';
 }

 // 显示模态框
 function showModal(content) {
     document.getElementById('modalContent').innerHTML = content;
     document.getElementById('modal').style.display = 'block';
 }

 // 关闭模态框
 document.querySelector('.close').addEventListener('click', function() {
     document.getElementById('modal').style.display = 'none';
 });

 // 处理注册表单提交
 document.getElementById('registerForm').addEventListener('submit', function(event) {
     event.preventDefault(); // 阻止表单默认提交行为

     const newUsername = document.getElementById('newUsername').value.trim();
     const newPassword = document.getElementById('newPassword').value;

     // 检查用户名是否已存在
     if (users[newUsername]) {
         document.getElementById('registerError').textContent = '用户名已存在';
     } else {
         users[newUsername] = newPassword;
         // 持久化存储用户数据
         localStorage.setItem('users', JSON.stringify(users));
         alert('注册成功');
         showLoginForm();
     }
 });

 // 处理登录表单提交
 document.getElementById('loginForm').addEventListener('submit', function(event) {
     event.preventDefault(); // 阻止表单默认提交行为

     const username = document.getElementById('username').value.trim();
     const password = document.getElementById('password').value;

     // 验证用户名和密码
     if (users[username] && users[username] === password) {
         alert('登录成功');
         // 跳转到目标页面
         window.location.href = "半生工具箱v5.2.0.html";
     } else {
         document.getElementById('loginError').textContent = '用户名或密码错误';
     }
 });

 // 初始化显示注册表单
 showRegisterForm();

 // 添加点击事件切换表单
 document.getElementById('showLoginForm').addEventListener('click', function(event) {
     event.preventDefault();
     showLoginForm();
 });

 document.getElementById('showRegisterForm').addEventListener('click', function(event) {
     event.preventDefault();
     showRegisterForm();
 });

 // 添加点击事件显示模态框
 document.getElementById('showModal').addEventListener('click', function(event) {
     event.preventDefault();
 });