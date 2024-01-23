**Versão 1.1** - Janeiro de 2024

# Jogo "Detona Ralph" 🎮



Este jogo simples foi desenvolvido usando HTML, CSS e JavaScript, inspirado no filme **Detona Ralph**. O objetivo é acertar o personagem *Ralph* conforme ele aparece em diferentes janelas. Aqui estão os principais pontos do jogo:

## Elementos HTML:

- Utiliza elementos HTML para criar a estrutura, como contêineres para as janelas e outros elementos visuais.
- Cada "janela" é representada por um elemento HTML onde *Ralph* pode aparecer.

## Estilo CSS:

- Responsável pelo estilo e layout do jogo, definindo a aparência das janelas e a posição do personagem.
- Classes CSS são usadas para aplicar estilos específicos aos elementos do jogo.

## JavaScript:

- Controla a lógica do jogo e as interações do usuário.
- A função `randomSquare` gera aleatoriamente uma janela para *Ralph* aparecer.
- A função `addListenerHitBox` adiciona ouvintes de eventos às janelas para interação do jogador.

## Objetivo do Jogo:

- O jogador deve clicar na janela correta onde *Ralph* está aparecendo.
- Acertar a janela certa resulta em pontos.
- O jogo tem um limite de tempo, desafiando o jogador a obter a maior pontuação possível antes do fim do tempo.

## Som e Feedback Visual:

- Inclui elementos de áudio para uma experiência mais envolvente.
- Feedback visual é dado ao acertar *Ralph* na janela, como mudanças visuais na pontuação.

## Reset do Jogo:

- Após o término do jogo, o jogador pode reiniciá-lo pressionando "OK" no alerta de Game Over.
- A função `resetGame` reinicia todos os elementos do jogo, permitindo uma nova tentativa.
