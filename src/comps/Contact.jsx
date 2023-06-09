const Contact = () => {
  return (
    <div name="contact" className="contact-container">
      <form
        method="POST"
        action="https://getform.io/f/f2006aea-d536-415d-b8ca-c4fd591a31e5"
        className="contact-form"
      >
        <div className="contact-heading-container">
          <p className="contact-title">Kontakt</p>
          <p className="subtitle">
            Wypełnij poniższy formularz lub skontaktuj się z nami bezopśrednio -
            support@sal.gg
          </p>
        </div>
        <input
          className="name-input"
          type="text"
          placeholder="Imię i nazwisko"
          name="name"
        />
        <input
          className="email-input"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="message-input"
          name="message"
          rows="10"
          placeholder="Wiadomość"
        ></textarea>
        <button className="send-button">Wyślij</button>
      </form>
    </div>
  );
};

export default Contact;
