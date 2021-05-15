import React from "react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <div className="flex-container">
      <div id="contact" class="contactSection">
        <div className="text-center">
          <p className="subHeading">Like the Devops Glossary app?</p>
          <h2>I'd love to hear from you!</h2>
          <a href="mailTo:rafaelfontesb@gmail.com" class="contactButton">
            GET IN TOUCH!
          </a>
        </div>
      </div>
      <div className="footer_icons">
        <div>
          <a href="https://www.linkedin.com/in/rafael-fontes-baptista/">
            <i className="fab fa-linkedin-in fa-2x"></i>
          </a>
        </div>
        <div>
          <a href="https://github.com/Rafael-Fontes-Baptista">
            <i className="fab fa-github fa-2x"></i>
          </a>
        </div>
      </div>
      <div className="footer_text">
        Copyright &copy; {currentYear} | Rafael Baptista
      </div>
    </div>
  )
}
