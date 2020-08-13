import EventHandler from './EventHandler';


// Single Responsability principle para classe não ter motivos para mudar
// Open Close --> Fechada para modificacao aberto para extensao
// Substituicao de Liskov se A e superclasse de S e T então objetos da classe S podem ser 
// substituidos por objetos da classe T sem quebrar o programa
// Interface Aggregation --> AbstractShareButton, AbstractLinkShareButton
// Dependency Inversion --> Não depender de implementacoes concretas e sim de contratos

export default abstract class AbstractShareButton {
  eventHandler: EventHandler;
  className: string

  constructor(className: string, eventHandler: EventHandler) {
    this.className = className;
    this.eventHandler = eventHandler; // Não depender da implentação concreta de eventHandler
  }

  abstract createAction() : () => void;

  bind() {
    const action = this.createAction();
    this.eventHandler.addEventListenerToClass(this.className, "click", action);
  }
}

// Classe abstrata parcialmente implementada, interface é so um contrato