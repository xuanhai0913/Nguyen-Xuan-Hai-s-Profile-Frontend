const navbar = document.getElementById("navbar");
const body = document.body;
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");
const themeToggleCheckbox = document.getElementById('theme-toggle-checkbox');
const themeToggleBtn = document.querySelector('.theme-toggle-btn');
const checkbox = document.getElementById('theme-toggle-checkbox');
const toggleSlider = document.querySelector('.toggle-slider');
const toggleDescription = document.querySelector('.toggle-description');

// Sự kiện cuộn trang
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (window.scrollY > 100) {
    navbar.classList.add("navbar-scrolled");
    navbar.classList.remove("navbar-transparent");
  } else {
    navbar.classList.remove("navbar-scrolled");
    navbar.classList.add("navbar-transparent");
  }
}

// Sự kiện toggle nav
navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

// Đóng nav khi click vào link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

themeToggleCheckbox.addEventListener('change', () => {
  if (themeToggleCheckbox.checked) {
    document.body.dataset.theme = 'dark';
    toggleSlider.style.transform = 'translateX(0)';
    toggleDescription.textContent = 'Dark';
    document.documentElement.style.setProperty('--bg-color', '#333333');
    document.documentElement.style.setProperty('--primary-bg', '#333');
    document.documentElement.style.setProperty('--color', '#e9dcdc');
    document.documentElement.style.setProperty('--togglebg', '#333');
    document.documentElement.style.setProperty('--toggleslider', '#e9dcdc');
    document.documentElement.style.setProperty('--roundcolor', '#333');
    document.documentElement.style.setProperty('--svgcolor', '#fff');
    document.documentElement.style.setProperty('--border-color', '#666666');
  } else {
    document.body.dataset.theme = 'light';
    toggleSlider.style.transform = 'translateX(64px)';
    toggleDescription.textContent = 'Light';
    document.documentElement.style.setProperty('--bg-color', '#ffffff');
    document.documentElement.style.setProperty('--primary-bg', '#8c43ff');
    document.documentElement.style.setProperty('--color', '#333');
    document.documentElement.style.setProperty('--togglebg', '#d4e7d5');
    document.documentElement.style.setProperty('--toggleslider', '#fff');
    document.documentElement.style.setProperty('--roundcolor', '#fff');
    document.documentElement.style.setProperty('--svgcolor', '#111');
    document.documentElement.style.setProperty('--border-color', '#ddd');
  }
});
themeToggleCheckbox.addEventListener('change', function() {
  if (this.checked) {
    toggleSlider.style.transform = 'translateX(0)';
  } else {
    toggleSlider.style.transform = 'translateX(64px)';
  }
});
const constraints = {
    'video': true,
    'audio': true
}
navigator.mediaDevices.getUserMedia(constraints)
    .then(stream => {
        console.log('Got MediaStream:', stream);
    })
    .catch(error => {
        console.error('Error accessing media devices.', error);
    });
function getConnectedDevices(type, callback) {
    navigator.mediaDevices.enumerateDevices()
        .then(devices => {
            const filtered = devices.filter(device => device.kind === type);
            callback(filtered);
        });
}

getConnectedDevices('videoinput', cameras => console.log('Cameras found', cameras));
// Updates the select element with the provided set of cameras
function updateCameraList(cameras) {
    const listElement = document.querySelector('select#availableCameras');
    listElement.innerHTML = '';
    cameras.map(camera => {
        const cameraOption = document.createElement('option');
        cameraOption.label = camera.label;
        cameraOption.value = camera.deviceId;
    }).forEach(cameraOption => listElement.add(cameraOption));
}

// Fetch an array of devices of a certain type
async function getConnectedDevices(type) {
    const devices = await navigator.mediaDevices.enumerateDevices();
    return devices.filter(device => device.kind === type)
}

// Get the initial set of cameras connected
const videoCameras = getConnectedDevices('videoinput');
updateCameraList(videoCameras);

// Listen for changes to media devices and update the list accordingly
navigator.mediaDevices.addEventListener('devicechange', event => {
    const newCameraList = getConnectedDevices('video');
    updateCameraList(newCameraList);
});
// Set up an asynchronous communication channel that will be
// used during the peer connection setup
const signalingChannel = new SignalingChannel(remoteClientId);
signalingChannel.addEventListener('message', message => {
    // New message from remote client received
});

// Send an asynchronous message to the remote client
signalingChannel.send('Hello!');
