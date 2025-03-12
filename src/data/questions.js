const data = [
  {
    "id": 0,
    "question": "Ah, um novo DEVentureiro! Vejo que percorreu um longo caminho para chegar até aqui. Seja bem-vindo à Guilda dos DEVentureiros, lar dos que buscam conhecimento e aprimoramento nas artes da programação.",
    "options": [
      {
        "text": "<1> Estou em busca de conhecimento e desafios!",
        "next": 1
      },
      {
        "text": "<2> Ouvi falar de um DEVentureiro chamado Kelverly e quero encontrá-lo.",
        "next": 2
      },
      {
        "text": "<3> Na verdade, só estou aqui para descansar e comer algo.",
        "next": 3
      }
    ]
  },
  {
    "id": 1,
    "question": "O desejo pelo conhecimento é o primeiro passo para uma grande jornada! Mas me diga, há algo ou alguém específico que procura?",
    "options": [
      {
        "text": "<1> Sim, estou em busca de Kelverly.",
        "next": 2
      },
      {
        "text": "<2> Apenas explorando a guilda, por enquanto.",
        "next": 3
      },
      {
        "text": "<3> Estou procurando desafios para testar minhas habilidades.",
        "next": 4
      },
      {
        "text": "<4> Preciso de informações sobre programação.",
        "next": 5
      }
    ]
  },
  {
    "id": 2,
    "question": "Kelverly, você diz? Hmm... Um nome conhecido entre os maiores DEVentureiros desta era. Dizem que seus feitos moldam o próprio código do universo digital!",
    "options": [
      {
        "text": "<1> Gostaria de conhecê-lo.",
        "next": 6
      },
      {
        "text": "<2> O que exatamente ele faz?",
        "next": 7
      },
      {
        "text": "<3> Isso parece interessante! Como posso aprender mais?",
        "next": 8
      },
      {
        "text": "<4> Isso é um mito ou uma lenda?",
        "next": 9
      }
    ]
  },
  {
    "id": 3,
    "question": "Até mesmo o descanso pode ser uma jornada. Mas se desejar trilhar o caminho do conhecimento, estou à disposição.",
    "options": [
      {
        "text": "<1> Na verdade, gostaria de conhecer Kelverly.",
        "next": 2
      },
      {
        "text": "<2> Sim, me fale mais sobre a guilda.",
        "next": 10
      },
      {
        "text": "<3> Existe um mapa desta guilda?",
        "next": 11
      },
      {
        "text": "<4> Preciso de uma recomendação de estudo.",
        "next": 12
      }
    ]
  },
  {
    "id": 4,
    "question": "Desafios moldam grandes desenvolvedores! Você deseja testar suas habilidades resolvendo enigmas lógicos ou desafios de código?",
    "options": [
      {
        "text": "<1> Enigmas lógicos.",
        "next": 13
      },
      {
        "text": "<2> Desafios de código!",
        "next": 14
      },
      {
        "text": "<3> Na verdade, quero encontrar Kelverly.",
        "next": 2
      }
    ]
  },
  {
    "id": 5,
    "question": "Ah, um buscador de conhecimento! Que área da programação deseja explorar?",
    "options": [
      {
        "text": "<1> Desenvolvimento Web.",
        "next": 15
      },
      {
        "text": "<3> Algoritmos e Estruturas de Dados.",
        "next": 17
      },
      {
        "text": "<4> Quero conhecer Kelverly primeiro.",
        "next": 2
      }
    ]
  },
  {
    "id": 6,
    "question": "Muito bem! Kelverly é um mestre da programação, especializado em front-end e análise de sistemas. Dizem que seu código é elegante e suas soluções inovadoras.",
    "options": [
      {
        "text": "<1> Onde posso encontrá-lo?",
        "next": 18
      },
      {
        "text": "<2> O que ele já criou?",
        "next": 19
      }
    ]
  },
  {
    "id": 7,
    "question": "Kelverly trabalha com tecnologias como HTML, CSS, JavaScript e React. Ele também tem experiência com Python e bancos de dados.",
    "options": [
      {
        "text": "<1> Quero ver as conquistas dele!",
        "next": 20
      },
      {
        "text": "<2> Onde posso encontrá-lo?",
        "next": 18
      }
    ]
  },
  {
    "id": 8,
    "question": "Para aprender mais sobre Kelverly, é necessário explorar seu passado, estudar seu código e desvendar os mistérios que envolvem sua jornada.",
    "options": [
      {
        "text": "<1> Como posso aprender mais sobre ele?",
        "next": 20
      },
      {
        "text": "<2> Quero ver seu grimório.",
        "next": 20
      }
    ]
  },
  {
    "id": 9,
    "question": "Muitos dizem que a lenda de Kelverly é só uma história contada por aventureiros. Outros afirmam que seus feitos são reais e mudaram a história da programação.",
    "options": [
      {
        "text": "<1> Então ele existe! Onde posso encontrá-lo?",
        "next": 18
      },
      {
        "text": "<2> Quero ver suas contribuições.",
        "next": 20
      }
    ]
  },
  {
    "id": 10,
    "question": "Aqui na guilda, há muitas áreas para explorar e aprender. Qual dessas você gostaria de explorar?",
    "options": [
      {
        "text": "<1> Quero saber mais sobre Desenvolvimento Web.",
        "next": 15
      },
      {
        "text": "<2> Como posso melhorar minhas habilidades em Banco de Dados?",
        "next": 16
      },
      {
        "text": "<3> Quero entender mais sobre Algoritmos.",
        "next": 17
      }
    ]
  },
  {
    "id": 11,
    "question": "A guilda é um lugar vasto e cheio de segredos. Se quer explorar, será preciso um mapa. Está pronto para traçar seu caminho?",
    "options": [
      {
        "text": "<1> Sim, quero explorar a guilda!",
        "next": 12
      },
      {
        "text": "<2> Quero apenas aprender programação por enquanto.",
        "next": 5
      }
    ]
  },
  {
    "id": 12,
    "question": "Aqui você encontra desde fundamentos de programação até técnicas avançadas. O que deseja aprender primeiro?",
    "options": [
      {
        "text": "<1> Lógica de programação.",
        "next": 13
      },
      {
        "text": "<2> Desenvolvimento Web.",
        "next": 15
      }
    ]
  },
  {
    "id": 13,
    "question": "Enigmas lógicos são o caminho da mente afiada! Vamos ver se você consegue resolver este.",
    "options": [
      {
        "text": "<1> Vamos tentar!",
        "next": 20
      }
    ]
  },
  {
    "id": 14,
    "question": "Desafios de código são a melhor maneira de aprender na prática. Prepare-se para o desafio!",
    "options": [
      {
        "text": "<1> Estou pronto para o desafio!",
        "next": 20
      }
    ]
  },
  {
    "id": 15,
    "question": "Desenvolvimento Web é uma arte que exige criatividade e técnica. Quer aprender sobre HTML, CSS e JavaScript?",
    "options": [
      {
        "text": "<1> Sim, quero aprender essas tecnologias.",
        "next": 20
      }
    ]
  },
  {
    "id": 16,
    "question": "Banco de dados são essenciais para organizar e recuperar informações. Deseja aprender mais sobre SQL e NoSQL?",
    "options": [
      {
        "text": "<1> Sim, quero aprender sobre bancos de dados.",
        "next": 20
      }
    ]
  },
  {
    "id": 17,
    "question": "Algoritmos e estruturas de dados são a base da programação. Vamos explorar alguns desafios juntos?",
    "options": [
      {
        "text": "<1> Vamos começar!",
        "next": 20
      }
    ]
  },
  {
    "id": 18,
    "question": "Kelverly pode ser encontrado em seu santuário digital. Ele registrou suas experiências e habilidades em um tomo especial, acessível apenas aos verdadeiros DEVentureiros.",
    "options": [
      {
        "text": "<1> Me mostre esse grimório!",
        "next": 20
      },
      {
        "text": "<2> Quero saber mais sobre sua jornada.",
        "next": 19
      }
    ]
  },
  {
    "id": 19,
    "question": "A jornada de Kelverly inclui feitos como sites interativos, aplicações web e soluções de front-end. Cada projeto reflete sua evolução como um verdadeiro DEVentureiro!",
    "options": [
      {
        "text": "<1> Me mostre seus feitos!",
        "next": 20
      },
      {
        "text": "<2> Quero ver sue grimório completo.",
        "next": 20
      }
    ]
  },
  {
    "id": 20,
    "question": "Parabéns, DEVentureiro! Você percorreu o caminho do conhecimento e agora pode pegar o grimório de Kelverly, onde seus feitos estão registrados.",
    "options": [
      {
        "text": "<1> Desvendar o grimório de Kelverly, onde seus feitos imortais estão registrados.",
        "next": null
      }
    ]
  }
];

export default data;
