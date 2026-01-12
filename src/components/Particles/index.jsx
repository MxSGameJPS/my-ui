import { useEffect, useRef } from "react";

export default function ParticlesBackground() {
  //useRef para referenciar o elemento canvas no HTML
  const canvasRef = useRef(null);

  //useEffect pra fazer o componente nascer.
  useEffect(() => {
    //Acessar o canvas
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    //Definir o tamanho do canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    //Criar partículas
    const particlesArray = [];
    const numberOfParticles = 1000; //mude para testar a performance

    //Classe prar criar partículas
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1; //tamanho entre 1 e 4
        this.speedX = Math.random() * 1.5 - 0.75; //velocidade aleatória
        this.speedY = Math.random() * 1.5 - 0.75; //velocidade aleatória
      }

      //Atualizar a posição da partícula
      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        //Se bater na borda, inverter a direção
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
      }

      //Desenhar na tela
      draw() {
        ctx.fillStyle = "#00ff88"; //cor da partícula
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    //Iniciar as bolinhas
    function init() {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }

    //Looping de animação
    function animate() {
      //limpar o canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      //Atualizar e desenhar cada partícula
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }

      //chamar o animate novamente
      requestAnimationFrame(animate);
    }

    init();
    animate();

    //O que acontece quando o componente morre?
    //Importante evitar vazamento de memória se mudarmos de página
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); //Array vazio para rodar só uma vez

  return (
    //Ligando o ref ao elemento html
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1, //Ficar atrás de tudo
        background: "#121214",
      }}
    />
  );
}
