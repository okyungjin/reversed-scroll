import './styles.css';

function initReverseScroll($reverse_area) {
  const total_height = $reverse_area.getBoundingClientRect().height;
  console.log(`total_height: ${total_height}`);
  $reverse_area.style.position = 'fixed';
  $reverse_area.style.bottom = 0;
  $reverse_area.style.left = 0;
  document.querySelector('body').style.height = `${total_height}px`;
  window.addEventListener('scroll', () => {
    $reverse_area.style.bottom = `${window.scrollY * -1}px`;
  });
};

const container = document.querySelector('.container');
console.log(container);
initReverseScroll(container);
