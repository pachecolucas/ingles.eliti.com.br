import Image from "next/image";
import hoge from "./ajh.png";

export default function Hero() {
  return (
    <div className="flex flex-col gap-10 py-5 px-5">
      <h1 className="font-bold uppercase text-xl text-center py-5">
        Desafio <span className="text-[2em]">3</span> da ELITI
      </h1>

      <div className="text-center text-xl uppercase font-bold bg-white p-5 text-slate-800 rounded-lg shadow-xl">
        A linguagem MAIS IMPORTANTE que um profissional da área de tecnologia
        deve saber não é HTML, CSS ou Javascript.{" "}
        <span className="font-extrabold block uppercase mt-5 text-4xl text-purple-700">
          É inglês!
        </span>
      </div>

      <p>
        Lembra que você disse ter interesse em aprender inglês o mais rápido
        possível sem desculpas ou timidez? É exatamente sobre isso este desafio!
      </p>

      <p>
        Apenas 1% dos brasileiros possuem fluência neste idioma. Isso é uma
        triste realidade que fecha portas no mundo inteiro para profissionais
        brasileiros.
      </p>

      <p>
        O foco aqui é conquistar fluência em inglês o mais rapidamente possível
        para você poder estar junto conosco em nossos encontros onde usamos
        inglês o tempo todo.
      </p>

      <p>
        Para isso, preparamos com carinho para você um material simples e, ao
        mesmo tempo, muito poderoso e eficaz para destravar o seu inglês de uma
        vez por todas.
      </p>

      <div className="m-auto mt-10">
        <Image
          src={hoge.src}
          width={hoge.width}
          height={hoge.height}
          alt="Photo A.J.Hoge"
        />
      </div>
      <p className="text-center uppercase text-xl font-bold">
        Conheça seu novo professor de inglês
      </p>

      <p>
        Para entrar na ELITI você deve conhecer ninguém menos do que o melhor
        professor de inglês do mundo: <b>A.J.Hoge</b>. Daqui pra frente, ele
        também será o seu professor.
      </p>

      <p>
        É sério! A.J.Hoge é um professor de inglês espetacular. Seu método de
        ensino começou a chamar atenção quando suas turminas de 5º ou 6º ano
        começaram a ficar fluentes em inglês de verdade deixando outros
        professores transtornados.
      </p>

      <p>
        E o que ele faz de tão diferente? Ele ensina o inglês real e não o
        inglês da escolinha. Para isso, A.J.Hoge desenvolveu o que ele chamou
        de:
      </p>

      <div className="text-center uppercase text-xl font-bold bg-white p-5 text-slate-800 rounded-lg shadow-xl">
        7 RULES TO LEARN REAL ENGLISH{" "}
        <span className="text-xs block font-normal">
          ( 7 regras para aprender inglês real )
        </span>
      </div>

      <p>
        Destas 7 regras, a única que você precisa saber agora para entrar na
        ELITI é a regra número 1:
      </p>

      <div className="text-center uppercase text-xl font-bold bg-white p-5 text-slate-800 rounded-lg shadow-xl">
        LEARN ENGLISH PHRASES,
        <br />
        NOT INDIVIDUAL WORDS{" "}
        <span className="text-xs block  font-normal">
          ( Aprenda frases em inglês, não palavras individuais )
        </span>
      </div>

      <p>
        Além de poder focar agora apenas nesta primeira regra, sem precisar se
        preocupar com as outras 6, temos uma outra boa notícia:
      </p>

      <p>
        Tudo que você precisa saber sobre a primeira regra está contido no 3
        primeiros parágrafos da transcrição do vídeo abaixo, ou seja, apenas os
        45 primeiros segundos deste vídeo do A.J.Hoge:
      </p>

      <iframe
        className="w-full aspect-video"
        src="https://www.youtube.com/embed/WatdPSRT6rA"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <p>
        Sua primeira missão é conseguir entender 100% do que está escrito no
        primeiro parágrafo e nos enviar um áudio por whatsapp o mais parecido
        possível com o que ele disse em inglês no ínicio do vídeo:
      </p>

      <div className="text-center text-xl font-bold bg-white p-5 text-slate-800 rounded-lg shadow-xl">
        <p className="uppercase mb-3 text-purple-700">Primeiro parágrafo:</p>
        <audio controls className="m-auto mb-4">
          <source src="/p1.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        Hi! I`m A.J.Hoge, one of the teachers of Learn Real English. And welcome
        to our video course.
        <span className="text-xs block font-normal">
          ( Olá! Eu sou A.J.Hoge, um dos professores de Aprenda Inglês Real. E
          bem vindo ao nosso curso em vídeo. )
        </span>
      </div>

      <p>
        Agora é sua vez de enviar uma mensagem de voz no Whatsapp abaixo
        repetindo exatamente o que o A.J.Hoge falou em inglês neste primeiro
        parágrafo:
      </p>

      <p className="text-center">
        <a
          href="https://api.whatsapp.com/send?phone=5548999826011&text=Meu áudio..."
          className="bg-green-600 hover:bg-green-500 rounded-xl py-5 m-1 flex justify-center align-middle uppercase font-bold tracking-wider"
        >
          Enviar áudio
          <br />
          por WhatsApp
        </a>
      </p>

      <p>
        Feito isso, já vamos deixar organizado aqui também o conteúdo do segundo
        e do terceiro parágrafo que você também verá nos enviar. Mas calma. Não
        precisa ser já.
      </p>

      <div className="text-center text-xl font-bold bg-white p-5 text-slate-800 rounded-lg shadow-xl">
        <p className="uppercase mb-3 text-purple-700">Segundo parágrafo:</p>
        <audio controls className="m-auto mb-4">
          <source src="/p2.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p>
          Now, let’s get started with Rule # 1 or Secret # 1. And Rule # 1 is to
          always learn English phrases, and to never, never study just
          individual words. So in this course we’re going to teach you a totally
          new way to learn English, a totally new way to study English, so that
          you can speak English quickly, easily, automatically, powerfully,
          confidently.
        </p>
      </div>

      <div className="text-center text-xl font-bold bg-white p-5 text-slate-800 rounded-lg shadow-xl">
        <p className="uppercase mb-3 text-purple-700">Terceiro parágrafo:</p>
        <audio controls className="m-auto mb-4">
          <source src="/p3.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p>
          So what’s the old way of learning English? You know it because you
          learned it in school. You’ve been using it for years and years and
          years. You sit in a classroom. You’ve got a textbook. You memorize
          lists of vocabulary words. You study lots and lots and lots of grammar
          rules. You do lots of reading and little fake conversation drills and
          activities. And this is the traditional old way of learning English
          but we have a totally new and different way of learning it. And we’re
          going to teach you each part of that, one part every day for a full
          seven days.
        </p>
      </div>

      <p>
        Para finalizar, vamos deixar aqui ainda um conjunto de arquivos
        relacionados a esta atividade para facilitar interações futuras:
      </p>

      <div className="text-center flex flex-col gap-5">
        <p>
          <a href="/rule1.pdf">Transcrição completa da regra número 1</a>
        </p>

        <p>
          <a href="/rule1.mp3">Áudio completo da regra número 1</a>
        </p>

        <p>
          <a href="https://effortlessenglishclub.com/7rules">
            Site oficial das 7 regras do A.J.Hoge.
          </a>
        </p>
      </div>
    </div>
  );
}
