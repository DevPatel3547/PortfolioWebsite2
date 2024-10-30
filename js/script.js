// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
  });
  
  // Custom Cursor
  const cursor = document.querySelector('.cursor');
  const cursor2 = document.querySelector('.cursor2');
  
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursor2.style.left = e.clientX + 'px';
    cursor2.style.top = e.clientY + 'px';
  });
  
  const links = document.querySelectorAll('a');
  
  links.forEach((link) => {
    link.addEventListener('mouseover', () => {
      cursor.classList.add('hover');
      cursor2.classList.add('hover');
    });
    link.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
      cursor2.classList.remove('hover');
    });
  });
  
  // Hamburger Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('open');
  });
  
  // Scroll Active Links
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', () => {
    let current = '';
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 70;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
  
    navItems.forEach((li) => {
      li.classList.remove('active');
      if (li.getAttribute('href') === '#' + current) {
        li.classList.add('active');
      }
    });
  });
  
  // Typing Animation
  const typing = document.querySelector('.typing');
  const words = ['Software Engineer.', 'Researcher.', 'Student.'];
  let wordIndex = 0;
  let letterIndex = 0;
  let currentWord = '';
  let currentLetters = '';
  
  (function type() {
    if (wordIndex === words.length) {
      wordIndex = 0;
    }
    currentWord = words[wordIndex];
    currentLetters = currentWord.slice(0, ++letterIndex);
  
    typing.textContent = currentLetters;
  
    if (currentLetters.length === currentWord.length) {
      wordIndex++;
      letterIndex = 0;
      setTimeout(type, 1000);
    } else {
      setTimeout(type, 200);
    }
  })();
  