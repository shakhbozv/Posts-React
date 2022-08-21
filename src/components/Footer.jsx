import React from 'react';

function Footer(props) {
    return (
        <footer className="footer has-background-info-light">
            <div className="content has-text-centered">
                <p>
                    <strong>
                        <a href="/" className="has-text-dark m-2">Monday Academy</a>
                    </strong>
                    Подразделение
                    <a href="https://macademy.uz" className='m-2'>OOO "Monday Labs"</a>
                </p>
            </div>

        </footer>
    );
}

export default Footer;