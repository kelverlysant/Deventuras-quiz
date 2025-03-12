import "./EndGame.css"
import { FaGithub,
  FaReact, FaHtml5,  FaCss3Alt,  FaJs,  FaLinkedin, FaWhatsapp, FaInstagram
 } from "react-icons/fa";
 import { GiAbstract066, GiAbstract016,  GiAbstract010 } from "react-icons/gi";
 import { MdEmail } from "react-icons/md";
 import { BiGitRepoForked } from "react-icons/bi";




const EndGame = () => {
  return (
<div id="end-game"> 
  <div className="end-game-container">
    <div className="box-title">
      <h1><GiAbstract066 />Kelverly Santos</h1>
      <div className="box-class">
        <nav>
          <ul>
            <li>Raça: <span>Humano.</span></li>
            <li>Classe: <span>DEVentureiro Front-End.</span></li>
            <li>Condição: <span>Em treinamento para se tornar um DEVentureiro Full.</span></li>
          </ul>
        </nav>
      </div>
    </div>
    <div className="box-about-me">
      <h3><GiAbstract010 />Descrição</h3>
      <p>
      Desenvolvedor Front-End com experiência na criação de interfaces dinâmicas e interativas. Especializado em React, JavaScript, TypeScript, HTML e CSS, com forte foco em UX/UI e design responsivo. Excelente habilidade para colaboração em equipe, comunicação eficaz e resolução de problemas, fatores essenciais para o desenvolvimento de projetos bem-sucedidos.
      </p>
    </div>
    
    <div className="box-skills">
      <div className="soft-skills">
        <h4><GiAbstract010 />Soft Skills:</h4>
        <ul>
          <li><GiAbstract016 />Boa comunicação</li>
          <li><GiAbstract016 />Trabalho em equipe</li>
          <li><GiAbstract016 />Capacidade de solucionar problemas</li>
          <li><GiAbstract016 />Resiliência</li>
        </ul>
      </div>
      <div className="habilidades">
        <h4><GiAbstract010 />Habilidades:</h4>
        <div className="box-habilidades">
          <nav>
            <ul>
              <li className="js"><FaJs/></li>
              <li className="react"><FaReact/></li>
              <li className="html"><FaHtml5/></li>
              <li className="css"><FaCss3Alt/></li>
              <li className="git"><FaGithub/></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

    <div className="project-container">
      <h4><GiAbstract010 />Feitos:</h4>
      <div className="box-project">

        <div className="project">
          <h4><GiAbstract016 />DayNotes</h4>
          <p>desenvolvi uma aplicação web que permite aos usuários criar, editar, buscar, fixar, excluir e até duplicar notas de forma simples e eficiente.<a href="https://kelverlysant.github.io/devNotes/" target="_blank" rel="noopener"><BiGitRepoForked /></a></p>
        </div>

        <div className="project">
          <h4><GiAbstract016 />Gerador de senhas</h4>
          <p>Desenvolvi um gerador de senhas dinâmico e personalizável, focado na segurança e na experiência do usuário.<a href="https://kelverlysant.github.io/projetsenha/
                " target="_blank" rel="noopener"><BiGitRepoForked /></a></p>
        </div>

        <div className="project">
          <h4><GiAbstract016 />TodoList</h4>
          <p>Desenvolvi projeto de Lista de Tarefas (Todo List).  Ele permite que os usuários adicionem, pesquisem, editem e excluam tarefas de maneira interativa.<a href="https://kelverlysant.github.io/listadetarefas/" target="_blank" rel="noopener"><BiGitRepoForked /></a></p>
        </div>

        <div className="project">
          <h4><GiAbstract016 />IMC</h4>
          <p>Uma página web interativa que calcula o Índice de Massa Corporal (IMC)!
          desenvolvi uma ferramenta simples e eficiente para ajudar as pessoas a monitorarem sua saúde.<a href="https://kelverlysant.github.io/imc-calculadora1/" target="_blank" rel="noopener"><BiGitRepoForked /></a></p>
       
        </div>
      </div>
    </div>

    <div className="box-contato">
      <h4><GiAbstract010 />Encantamento de contato:</h4>
      <nav>
        <ul>
          <li><a href="https://github.com/kelverlysant" target="_blank" rel="noopener"><FaGithub/></a></li>
          <li><a href="https://www.linkedin.com/in/kelverly-santos-496439275/" target="_blank" rel="noopener"><FaLinkedin/></a></li>
          <li><a href="https://wa.me/qr/SW22VAALVZEJJ1" target="_blank" rel="noopener"><FaWhatsapp/></a></li>
          <li><a href="https://www.instagram.com/kelv.santos0/?hl=es" target="_blank" rel="noopener"><FaInstagram/></a></li>
          <li><a href="mailto:kelverlysantos09@gmail.com" target="_blank" rel="noopener"><MdEmail/></a></li>
        </ul>
      </nav>
    </div>
  </div>
</div>

  )
}

export default EndGame