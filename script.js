// Menu Mobile
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

menuToggle.addEventListener('click', () => {
  mainNav.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

// Fechar menu ao clicar em links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('active');
    menuToggle.classList.remove('active');
  });
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const item = question.parentElement;
    const isActive = item.classList.contains('active');
    
    // Fecha todos os itens
    document.querySelectorAll('.faq-item').forEach(el => {
      el.classList.remove('active');
    });
    
    // Abre o item clicado se não estiver ativo
    if (!isActive) {
      item.classList.add('active');
    }
  });
});

// Formulário de Contato
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validação básica
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const tel = document.getElementById('phone').value.trim();
    
    if (!name || !email || !message || !tel) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    
    // Simulação de envio
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    this.reset();
  });
}

// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Efeito de scroll no header
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  // Pode adicionar outras inicializações aqui
});

document.getElementById("Chatbot").addEventListener("click", function() {
  alert("Chat em desenvolvimento!");
  return;
})

// efeito h1
document.addEventListener("DOMContentLoaded", function () {
  const title = document.getElementById("hero-title");
  const text = "Cuidando da sua saúde com excelência";
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      title.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 60); 
    }
  }

  typeWriter();
});

