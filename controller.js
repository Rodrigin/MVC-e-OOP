import { Mensagem } from './model.js';
import { renderMensagem } from './view.js';

const mensagem = new Mensagem("MVC em funcionamento!");
renderMensagem(mensagem.getTexto());
