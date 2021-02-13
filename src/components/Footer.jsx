import vk from "./../common/images/vk-32.png";
import gh from "./../common/images/github-10-32.png";
import wtsp from "./../common/images/whatsapp-32.png";

export const Footer = () => (
    <footer>
        Game store by <b>Vadim Guber</b>
        <div className="right">
            <div className="contacts">
                <a className="card-link" href="https://vk.com/ri4an">
                    <img src={vk} />{" "} Vadim Guber
                </a>
            </div>
            <div className="contacts">
                <a
                    className="card-link"
                    href="https://github.com/ri4an-official"
                >
                    <img src={gh} />{" "} ri4an-official
                </a>
            </div>
            <div className="contacts">
                <a className="card-link" href="tel:+77471833792">
                    <img src={wtsp} />{" "} +7 747 183 37 92
                </a>
            </div>
        </div>
        <br />
        <small>
            <span dangerouslySetInnerHTML={{ __html: "&copy;" }} /> All rights reserved, 2020 - {new Date().getFullYear()}
        </small>
    </footer>
);
