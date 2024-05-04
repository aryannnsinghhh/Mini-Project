document.addEventListener('DOMContentLoaded', () => {
    const courseListContainer = document.getElementById('course-list');
    const registeredCoursesContainer = document.getElementById('registered-courses');
    const totalCostDisplay = document.getElementById('total-cost');
  
    const courses = [
      {
        id: 1,
        title: 'Service checkup',
        description: 'To ensure for updates, examining operational status, identifying potential issues, and making necessary adjustments',
        instructor: 'John Doe',
        duration: '7 days ',
        price: 499,
        imageUrl: 'lapserv.jpeg'
      },
      {
        id: 2,
        title: 'Hardware repair',
        description: 'Hardware repair involves fixing or replacing components of a device or system that have become faulty, damaged, or outdated.',
        instructor: 'Jane Smith',
        duration: '8 days',
        price: 999,
        imageUrl: 'hardw.jpeg'
      },
      {
        id: 3,
        title: 'Software Repair',
        description: 'Software repair focuses on fixing and optimizing the software environment within a device, including OS, Apps, and data. ',
        instructor: 'Alice Johnson',
        duration: '12 days',
        price: 899,
        imageUrl: 'softw.jpeg'
      }
    ];
  
    let registeredCourses = [];
  
    
    const renderCourses = () => {
      courseListContainer.innerHTML = '';
      courses.forEach((course) => {
        const courseCard = createCourseCard(course);
        courseListContainer.appendChild(courseCard);
      });
    };
  
    
    const createCourseCard = (course) => {
      const { id, title, description, instructor, duration, price, imageUrl } = course;
  
      const courseCard = document.createElement('div');
      courseCard.classList.add('course');
      
  
      courseCard.innerHTML = `
        <img src="${imageUrl}" alt="${title}">
        <div class="course-details">
          <h3>${title}</h3>
          <p><b>Description:</b> ${description}</p>
          <p><b>Provider:</b> ${instructor}</p>
          <p><b>Duration:</b> ${duration}</p>
          <p><b>Price:</b> Rs\n${price}</p>
          <button class="register-btn" data-id="${id}" data-title="${title}" data-price="${price}">Register</button>
        </div>
      `;
  
      return courseCard;
    };
  
  
    const registerCourse = (id, title, price) => {
      const course = courses.find(course => course.id === id);
      registeredCourses.push({ id, title, price });
  
      const courseCard = createCourseCard(course);
      const registerBtn = courseCard.querySelector('.register-btn');
      registerBtn.remove();
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.classList.add('delete-btn');
      deleteBtn.addEventListener('click', () => {
        registeredCourses = registeredCourses.filter(course => course.id !== id);
        registeredCoursesContainer.removeChild(courseCard);
        updateTotalCost();
      });
  
      courseCard.querySelector('.course-details').appendChild(deleteBtn);
      registeredCoursesContainer.appendChild(courseCard);
  
      updateTotalCost();
    };
  
   
    const updateTotalCost = () => {
      const totalCost = registeredCourses.reduce((total, course) => total + course.price, 0);
      totalCostDisplay.textContent = `Rs\n${totalCost}`;
    };
  
    
    courseListContainer.addEventListener('click', (event) => {
      if (event.target.classList.contains('register-btn')) {
        const id = parseInt(event.target.dataset.id);
        const title = event.target.dataset.title;
        const price = parseInt(event.target.dataset.price);
        registerCourse(id, title, price);
      }
    });
  
   
    renderCourses();
  });
    