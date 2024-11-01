// Importerer nødvendige hooks og styling
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './SignInPage.module.scss';

// SignInPage-komponenten håndterer bruger-login og tilmelding
export const SignInPage = () => {
    // State til at skifte mellem login og tilmelding
    const [isSignUp, setIsSignUp] = useState(false);
    // State til at spore, om formularen er sendt
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate(); // Bruges til at navigere til andre sider

    // Skifter mellem login og tilmeldingsvisning
    const toggleSignUp = () => {
        setIsSignUp(!isSignUp);
    };

    // Håndterer formularindsendelse og sætter isSubmitted til true
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    // Navigerer tilbage til forsiden ved klik
    const handleBackToHome = () => {
        navigate('/');
    };

    return (
        <div>
            <div className={style.signInContainer}>
                <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>

                {/* Viser succesmeddelelse, hvis formularen er indsendt */}
                {isSubmitted ? (
                    <div>
                        <p className={style.successMessage}>Successful {isSignUp ? 'Sign Up' : 'Login'}!</p>
                        <button onClick={handleBackToHome} className={style.backToHomeButton}>Back to Home</button>
                    </div>
                ) : (
                    // Formular til login eller tilmelding
                    <form onSubmit={handleSubmit}>
                        <div className={style.inputGroup}>
                            <label>First name</label>
                            <input type="text" placeholder="Enter your first name" required />
                        </div>
                        <div className={style.inputGroup}>
                            <label>Last name</label>
                            <input type="text" placeholder="Enter your last name" required />
                        </div>
                        <div className={style.buttonGroup}>
                            {/* Knap til at skifte mellem login og tilmelding */}
                            <button type="button" className={style.signUpButton} onClick={toggleSignUp}>
                                {isSignUp ? 'Login' : 'Sign up'}
                            </button>
                            {/* Knap til at indsende formularen */}
                            <button type="submit" className={style.submitButton}>
                                Submit
                            </button>
                        </div>
                    </form>
                )}
            </div>

            {/* Sort linje i bunden */}
            <div className={style.footerLine}></div>
        </div>
    );
};
