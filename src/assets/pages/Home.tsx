import { useEffect } from "react";
import ShopCard from "../components/ShopCard";

declare global {
    interface Window {
        ScrollReveal: any;
    }
}

const Home = () => {

    useEffect(() => {
        if (window.ScrollReveal) {
            const sr = window.ScrollReveal({
                origin: 'top',
                distance: '30px',
                duration: 2000,
                reset: false
            });
            sr.reveal(`.home__data, .home__img,
                        .about__data, .about__img,
                        .services__content, .menu__content,
                        .app__data, .app__img,
                        .contact__data, .contact__button,
                        .footer__content`, {
                interval: 200
            });
        } else {
            console.error('ScrollReveal nije učitan');
        }
    }, []);

    

  return (
    <main className="l-main">
            
            <section className="home" id="home">
                <div className="home__container bd-container bd-grid">
                    <div className="home__data">
                        <h1 className="home__title">Ćupter</h1>
                        <h2 className="home__subtitle">Tradicionalna autohtona hercegovačka slastica od sorti grožđa žilavke i blatine</h2>
                        <a href="#about" className="button">Otkrij Više</a>
                    </div>
    
                    <img src="\slikaCuptera.png" alt="/slikaCuptera.png" className="home__img" />
                </div>
            </section>
            
            
            <section className="about section bd-container" id="about">
                <div className="about__container  bd-grid">
                    <div className="about__data">
                        <span className="section-subtitle about__initial">O Nama</span>
                        <h2 className="section-title about__initial">Hercegovačka izba je obiteljski posao</h2>
                        <p className="about__description">Što je cupter i kako se pravi nije tajna. Slastica je u Hercegovini još od antičkog doba, a prvi pisani trag od 1660-ih. Naša misija je ponuditi gotov proizvod na trpeze širom Bosne i Hercegovine i bliže regije.</p>
                        <a href="/about" className="button">Više o nama</a>
                    </div>

                    <img src="/slikaCuptera2.webp" alt="/aboutus2.jpg" className="about__img" />
                </div>
            </section>

            
            <section className="services section bd-container" id="services">
                <span className="section-subtitle"></span>
                <h2 className="section-title">Što Vam Nudimo</h2>

                <div className="services__container  bd-grid">
                    <div className="services__content">
                        <svg  className="services__img" xmlns="http://www.w3.org/2000/svg">
                            <path d="M46.106,13.556C48.517,10.361,50,6.14,50,1.5h-2c0,8.601-5.547,15.619-12.468,15.967c-0.784-0.461-1.663-0.772-2.602-0.898
                            C32.473,13.149,29.544,10.5,26,10.5c-2.181,0-4.188,1.023-5.496,2.69C19.222,11.556,17.234,10.5,15,10.5c-3.86,0-7,3.14-7,7
                            c0,1.541,0.506,2.999,1.402,4.191C6.311,22.417,4,25.191,4,28.5c0,2.192,1.014,4.15,2.596,5.434C3.919,34.918,2,37.486,2,40.5
                            c0,1.192,0.301,2.334,0.869,3.362C1.133,45.137,0,47.186,0,49.5c0,3.86,3.14,7,7,7c2.505,0,4.7-1.327,5.938-3.31
                            c1.18,0.842,2.602,1.31,4.063,1.31c2.803,0,5.219-1.66,6.336-4.044C24.431,51.133,25.69,51.5,27,51.5
                            c3.113,0,5.756-2.044,6.662-4.86c1.019,0.557,2.161,0.86,3.338,0.86c3.86,0,7-3.14,7-7c0-1.52-0.493-2.925-1.319-4.074
                            C44.703,35.165,46,32.935,46,30.5c0-3.86-3.107-7.023-7-6.992c0-0.003,0-0.005,0-0.008c0-1.611-0.552-3.092-1.47-4.276
                            c2.428-0.498,4.654-1.695,6.537-3.417C44.724,22.364,50.272,27.5,57,27.5h1v-1C58,19.705,52.758,14.12,46.106,13.556z
                             M36.914,24.413c-0.001,0.003-0.003,0.006-0.003,0.009c-0.018,0.098-0.053,0.19-0.077,0.286c-0.043,0.171-0.086,0.342-0.145,0.505
                            c-0.048,0.132-0.11,0.257-0.169,0.383c-0.056,0.12-0.112,0.239-0.177,0.354c-0.074,0.13-0.155,0.256-0.24,0.379
                            c-0.068,0.098-0.14,0.193-0.215,0.286c-0.096,0.119-0.193,0.237-0.3,0.347c-0.086,0.089-0.179,0.169-0.271,0.251
                            c-0.108,0.097-0.213,0.197-0.329,0.284c-0.208,0.155-0.425,0.297-0.656,0.419c-0.063,0.034-0.133,0.056-0.197,0.087
                            c-0.195,0.092-0.394,0.177-0.602,0.244c-0.077,0.025-0.157,0.042-0.235,0.063c-0.247,0.066-0.496,0.125-0.757,0.153
                            c-0.025-0.014-0.051-0.024-0.076-0.038c-0.481-0.275-0.997-0.494-1.541-0.65c-0.073-0.021-0.147-0.038-0.221-0.057
                            c-0.204-0.051-0.412-0.093-0.623-0.126c-0.077-0.012-0.154-0.026-0.232-0.036c-0.272-0.033-0.548-0.055-0.828-0.056
                            c-0.005,0-0.01-0.001-0.015-0.001c-0.458-0.343-0.845-0.757-1.156-1.219l-0.064-0.1c-0.395-0.618-0.643-1.301-0.737-2.03
                            l-0.017-0.117C27.012,23.858,27,23.68,27,23.5c0-2.757,2.243-5,5-5s5,2.243,5,5C37,23.812,36.969,24.117,36.914,24.413z
                             M33.363,36.907c-0.09,0.165-0.193,0.322-0.301,0.475c-0.034,0.048-0.067,0.097-0.103,0.145c-0.096,0.127-0.202,0.247-0.311,0.364
                            c-0.056,0.06-0.11,0.122-0.169,0.179c-0.101,0.099-0.209,0.189-0.318,0.28c-0.074,0.061-0.147,0.124-0.225,0.181
                            c-0.107,0.079-0.222,0.148-0.336,0.219c-0.088,0.054-0.174,0.111-0.265,0.159c-0.027,0.014-0.057,0.025-0.084,0.038
                            c-0.015-0.011-0.032-0.019-0.047-0.03c-0.564-0.426-1.192-0.767-1.87-1.008c-0.044-0.016-0.086-0.033-0.13-0.048
                            c-0.317-0.105-0.643-0.187-0.978-0.247c-0.063-0.011-0.126-0.02-0.19-0.029C27.698,37.535,27.353,37.5,27,37.5
                            c-0.366,0-0.731,0.029-1.091,0.086c0.005-0.033,0.003-0.066,0.008-0.099C25.966,37.16,26,36.831,26,36.5
                            c0-0.273-0.02-0.541-0.05-0.806c-0.01-0.09-0.027-0.179-0.041-0.269c-0.027-0.175-0.059-0.348-0.099-0.519
                            c-0.023-0.1-0.049-0.2-0.077-0.299c-0.047-0.169-0.102-0.333-0.162-0.497c-0.031-0.084-0.059-0.17-0.093-0.253
                            c-0.1-0.245-0.211-0.483-0.337-0.713c-0.001-0.002-0.002-0.004-0.003-0.006c0.052-0.038,0.096-0.087,0.147-0.127
                            c0.218-0.169,0.427-0.345,0.621-0.536c0.048-0.048,0.092-0.099,0.139-0.148c0.201-0.21,0.39-0.429,0.562-0.661
                            c0.03-0.041,0.058-0.082,0.087-0.123c0.182-0.255,0.345-0.521,0.491-0.799c0.014-0.027,0.029-0.055,0.043-0.082
                            c0.155-0.306,0.289-0.621,0.398-0.949c0.001-0.004,0.003-0.007,0.005-0.011C28.089,29.568,28.547,29.5,29,29.5
                            c0.307,0,0.604,0.037,0.896,0.091c0.087,0.016,0.173,0.037,0.259,0.057c0.215,0.051,0.425,0.117,0.628,0.195
                            c0.076,0.029,0.154,0.054,0.229,0.087c0.271,0.12,0.533,0.258,0.776,0.422l0.007,0.005c0.22,0.149,0.419,0.325,0.613,0.506
                            c0.187,0.176,0.352,0.369,0.509,0.568c0.051,0.065,0.109,0.122,0.156,0.19c0.166,0.235,0.305,0.486,0.429,0.744
                            c0.021,0.045,0.051,0.085,0.071,0.13c0.129,0.292,0.225,0.596,0.296,0.908c0.005,0.022,0.015,0.042,0.02,0.064
                            c0.068,0.32,0.101,0.649,0.104,0.98l-0.021,0.351c-0.043,0.723-0.244,1.411-0.568,2.028C33.392,36.853,33.378,36.88,33.363,36.907z
                             M19.434,40.945c-0.211-0.079-0.426-0.147-0.646-0.205c-0.059-0.016-0.117-0.031-0.177-0.045c-0.204-0.048-0.411-0.086-0.621-0.116
                            c-0.063-0.009-0.124-0.021-0.187-0.029c-0.264-0.03-0.531-0.05-0.803-0.05c-0.285,0-0.581,0.021-0.895,0.065
                            C16.07,40.54,16.035,40.515,16,40.489c0-0.227-0.012-0.453-0.035-0.677c-0.015-0.151-0.041-0.299-0.066-0.448
                            c-0.012-0.07-0.018-0.141-0.032-0.21c-0.036-0.184-0.083-0.364-0.133-0.543c-0.009-0.032-0.015-0.065-0.025-0.097
                            c-0.056-0.19-0.123-0.375-0.194-0.558c-0.008-0.021-0.015-0.043-0.023-0.064c-0.074-0.183-0.157-0.361-0.246-0.536
                            c-0.011-0.022-0.021-0.044-0.032-0.066c-0.087-0.169-0.183-0.332-0.284-0.492c-0.018-0.029-0.034-0.059-0.053-0.087
                            c-0.098-0.152-0.204-0.297-0.313-0.441c-0.027-0.035-0.052-0.071-0.079-0.106c-0.108-0.136-0.222-0.266-0.34-0.394
                            c-0.025-0.027-0.047-0.057-0.073-0.084c0.059-0.36,0.158-0.712,0.295-1.052c0.278-0.153,0.541-0.33,0.795-0.519
                            c0.023-0.017,0.046-0.034,0.069-0.051c0.503-0.383,0.951-0.831,1.334-1.334c0.018-0.023,0.035-0.046,0.052-0.07
                            c0.186-0.25,0.36-0.51,0.512-0.784c0.024-0.01,0.047-0.02,0.071-0.03c0.261-0.102,0.527-0.183,0.797-0.239
                            c0.045-0.009,0.091-0.015,0.137-0.023C18.419,31.533,18.707,31.5,19,31.5c0.318,0,0.627,0.037,0.929,0.094
                            c0.039,0.007,0.079,0.012,0.117,0.02c0.286,0.061,0.563,0.15,0.829,0.258c0.045,0.018,0.089,0.037,0.133,0.056
                            c0.261,0.115,0.512,0.25,0.748,0.406c0.036,0.024,0.071,0.052,0.107,0.077c0.211,0.148,0.409,0.313,0.594,0.491
                            c0.033,0.032,0.068,0.059,0.1,0.092c0.175,0.178,0.329,0.375,0.476,0.577c0.081,0.111,0.153,0.227,0.224,0.343
                            c0.091,0.149,0.175,0.302,0.25,0.461c0.051,0.107,0.1,0.215,0.143,0.326c0.074,0.191,0.133,0.388,0.183,0.589
                            c0.024,0.094,0.053,0.186,0.071,0.281C23.963,35.873,24,36.182,24,36.5c0,0.301-0.035,0.602-0.094,0.901
                            c-0.027,0.136-0.077,0.271-0.116,0.406c-0.054,0.187-0.099,0.374-0.176,0.559c-1.14,0.627-2.072,1.577-2.712,2.735
                            c-0.213,0.092-0.417,0.166-0.613,0.223c-0.24-0.128-0.49-0.239-0.745-0.339C19.508,40.971,19.471,40.959,19.434,40.945z M18,28.5
                            c0-0.311-0.027-0.615-0.067-0.915c-0.009-0.066-0.019-0.131-0.03-0.196c-0.046-0.287-0.106-0.568-0.186-0.843
                            c-0.004-0.014-0.007-0.028-0.011-0.042c-0.09-0.303-0.203-0.596-0.332-0.881c-0.019-0.041-0.04-0.081-0.059-0.123
                            c-0.12-0.252-0.254-0.496-0.402-0.731c-0.015-0.024-0.026-0.052-0.042-0.076c0.146-0.209,0.312-0.412,0.496-0.606
                            c0.055-0.02,0.107-0.046,0.162-0.068c0.116-0.045,0.231-0.093,0.345-0.144c0.092-0.042,0.183-0.086,0.274-0.132
                            c0.114-0.057,0.225-0.117,0.335-0.181c0.088-0.05,0.174-0.103,0.259-0.158c0.104-0.066,0.207-0.135,0.307-0.206
                            c0.088-0.063,0.174-0.128,0.26-0.194c0.09-0.071,0.178-0.143,0.264-0.217c0.044-0.038,0.092-0.072,0.135-0.111
                            c0.654-0.178,1.31-0.202,1.942-0.12c0.208,0.027,0.415,0.064,0.616,0.117c0.077,0.02,0.153,0.043,0.228,0.066
                            c0.223,0.07,0.441,0.154,0.652,0.255c0.039,0.018,0.079,0.035,0.117,0.054c0.528,0.27,1.011,0.633,1.422,1.082l0.063,0.069
                            c0.121,0.139,0.243,0.278,0.348,0.432c0.015,0.093,0.039,0.183,0.058,0.274c0.039,0.192,0.085,0.381,0.14,0.567
                            c0.045,0.154,0.091,0.308,0.147,0.459c0.044,0.118,0.095,0.232,0.145,0.347c0.05,0.115,0.102,0.228,0.158,0.341
                            c0.06,0.12,0.122,0.238,0.188,0.354c0.015,0.026,0.027,0.054,0.043,0.08C25.99,27.201,26,27.35,26,27.5
                            c0,0.336-0.041,0.665-0.105,0.986l-0.05,0.204c-0.255,1.039-0.835,1.954-1.634,2.629c-0.026,0.022-0.053,0.043-0.079,0.065
                            c-0.066,0.053-0.145,0.091-0.214,0.141c-0.152-0.15-0.31-0.295-0.475-0.431c-0.167-0.138-0.341-0.267-0.519-0.388
                            c-0.004-0.003-0.008-0.006-0.012-0.009c-0.563-0.382-1.177-0.677-1.825-0.879c-0.002-0.001-0.005-0.002-0.007-0.003
                            c-0.194-0.06-0.391-0.109-0.591-0.152c-0.029-0.006-0.056-0.015-0.085-0.021c-0.183-0.037-0.369-0.062-0.555-0.085
                            c-0.047-0.006-0.093-0.016-0.14-0.021C19.475,29.512,19.238,29.5,19,29.5c-0.327,0-0.65,0.031-0.969,0.075
                            c-0.038,0.005-0.078,0.003-0.116,0.009c0.005-0.033,0.003-0.066,0.008-0.099C17.968,29.163,18,28.835,18,28.5z M21.591,15.145
                            C22.456,13.526,24.146,12.5,26,12.5c2.444,0,4.484,1.763,4.916,4.084c-0.036,0.006-0.07,0.019-0.106,0.025
                            c-0.31,0.053-0.616,0.121-0.91,0.214c-0.019,0.006-0.038,0.015-0.057,0.021c-0.279,0.091-0.548,0.202-0.811,0.326
                            c-0.065,0.03-0.129,0.061-0.193,0.093c-0.271,0.138-0.534,0.289-0.784,0.459c-0.028,0.019-0.053,0.041-0.081,0.06
                            c-0.226,0.159-0.44,0.333-0.645,0.518c-0.052,0.046-0.103,0.092-0.154,0.14c-0.217,0.207-0.423,0.426-0.613,0.659
                            c-0.028,0.034-0.052,0.071-0.079,0.106c-0.165,0.212-0.317,0.433-0.457,0.663c-0.035,0.057-0.071,0.113-0.104,0.172
                            c-0.15,0.262-0.284,0.533-0.4,0.814c-0.02,0.05-0.036,0.101-0.056,0.151c-0.096,0.25-0.176,0.506-0.243,0.768
                            c-0.011,0.042-0.029,0.08-0.039,0.122c-0.523-0.392-1.099-0.698-1.706-0.929c-0.057-0.022-0.115-0.041-0.174-0.061
                            c-0.284-0.1-0.574-0.181-0.871-0.243c-0.057-0.012-0.112-0.027-0.169-0.037c-0.062-0.011-0.122-0.031-0.185-0.041
                            c-0.189-0.236-0.353-0.481-0.49-0.732c0.008-0.023,0.011-0.048,0.019-0.071c0.114-0.33,0.206-0.67,0.27-1.021
                            c0.011-0.058,0.017-0.116,0.027-0.174C21.963,18.232,22,17.871,22,17.5c0-0.371-0.037-0.732-0.093-1.087
                            c-0.009-0.059-0.016-0.117-0.027-0.175c-0.064-0.351-0.156-0.691-0.271-1.022C21.601,15.192,21.599,15.168,21.591,15.145z M15,12.5
                            c2.055,0,3.823,1.249,4.59,3.026c0.12,0.28,0.207,0.568,0.275,0.86c0.008,0.034,0.024,0.065,0.031,0.1
                            C19.965,16.818,20,17.157,20,17.5s-0.035,0.682-0.104,1.014c-0.007,0.035-0.023,0.065-0.031,0.1c-0.067,0.292-0.154,0.58-0.275,0.86
                            c-0.368,0.851-0.968,1.576-1.717,2.105c-0.052,0.037-0.105,0.074-0.158,0.108c-0.23,0.15-0.472,0.284-0.726,0.395
                            c-0.045,0.019-0.091,0.034-0.136,0.053C16.278,22.365,15.655,22.5,15,22.5c-0.15,0-0.297-0.009-0.443-0.024
                            c-0.024-0.014-0.05-0.026-0.075-0.04c-0.124-0.072-0.251-0.138-0.38-0.202c-0.068-0.034-0.136-0.067-0.204-0.099
                            c-0.132-0.06-0.265-0.115-0.401-0.167c-0.066-0.025-0.133-0.05-0.2-0.073c-0.146-0.051-0.293-0.097-0.443-0.138
                            c-0.055-0.015-0.109-0.029-0.164-0.042c-0.165-0.041-0.331-0.077-0.501-0.106c-0.015-0.003-0.029-0.007-0.044-0.009
                            C10.798,20.662,10,19.144,10,17.5C10,14.743,12.243,12.5,15,12.5z M6,28.5c0-2.757,2.243-5,5-5c0.295,0,0.58,0.038,0.861,0.087
                            c0.081,0.014,0.162,0.027,0.242,0.045c0.255,0.058,0.502,0.135,0.74,0.23c0.068,0.027,0.135,0.056,0.202,0.086
                            c0.254,0.115,0.501,0.243,0.73,0.397l0.028,0.018c0.475,0.323,0.881,0.734,1.221,1.196c0.075,0.102,0.145,0.207,0.212,0.313
                            c0.1,0.161,0.191,0.329,0.272,0.501c0.047,0.099,0.095,0.198,0.136,0.3c0.079,0.201,0.14,0.41,0.193,0.622
                            c0.022,0.088,0.051,0.174,0.068,0.263C15.963,27.864,16,28.178,16,28.5c0,0.309-0.037,0.609-0.091,0.903
                            c-0.01,0.052-0.015,0.104-0.027,0.155c-0.054,0.249-0.135,0.488-0.225,0.722c-0.038,0.099-0.077,0.197-0.122,0.294
                            c-0.061,0.133-0.136,0.257-0.208,0.384c-0.078,0.136-0.149,0.276-0.239,0.404c-0.082,0.117-0.18,0.22-0.272,0.329
                            c-0.19,0.227-0.399,0.436-0.626,0.626c-0.109,0.091-0.211,0.189-0.328,0.27c-0.129,0.091-0.27,0.163-0.408,0.241
                            C12.727,33.244,11.896,33.5,11,33.5C8.243,33.5,6,31.257,6,28.5z M4.626,42.916C4.215,42.179,4,41.356,4,40.5c0-2.757,2.243-5,5-5
                            c1.32,0,2.515,0.524,3.409,1.364c0.187,0.175,0.352,0.368,0.508,0.567c0.051,0.065,0.11,0.123,0.158,0.191
                            c0.165,0.233,0.303,0.483,0.426,0.74c0.022,0.046,0.053,0.088,0.073,0.135c0.128,0.29,0.224,0.594,0.295,0.903
                            c0.005,0.023,0.016,0.045,0.021,0.068C13.962,39.805,14,40.151,14,40.5c0,0.231-0.02,0.467-0.059,0.714
                            c-0.506,0.248-0.97,0.569-1.403,0.93c-0.084,0.069-0.173,0.132-0.253,0.206c-0.136,0.124-0.258,0.262-0.384,0.397
                            c-0.109,0.116-0.221,0.229-0.322,0.352c-0.102,0.126-0.193,0.26-0.286,0.393c-0.074,0.105-0.159,0.202-0.227,0.311
                            c-0.022-0.016-0.047-0.027-0.07-0.042c-0.244-0.17-0.499-0.325-0.764-0.464c-0.078-0.041-0.158-0.077-0.237-0.115
                            c-0.233-0.111-0.472-0.21-0.718-0.295c-0.057-0.02-0.111-0.044-0.169-0.062c-0.291-0.092-0.592-0.16-0.898-0.214
                            c-0.079-0.014-0.159-0.025-0.238-0.036C7.652,42.531,7.33,42.5,7,42.5c-0.374,0-0.739,0.038-1.097,0.095
                            c-0.059,0.009-0.118,0.016-0.176,0.027c-0.353,0.065-0.695,0.159-1.028,0.275C4.675,42.905,4.65,42.907,4.626,42.916z M7,54.5
                            c-2.757,0-5-2.243-5-5c0-1.998,1.186-3.714,2.885-4.513c0.129-0.06,0.26-0.114,0.392-0.162c0.137-0.051,0.277-0.092,0.419-0.131
                            c0.16-0.042,0.32-0.085,0.482-0.111c0.096-0.016,0.197-0.019,0.295-0.03c0.672-0.067,1.349-0.004,1.99,0.191
                            c0.061,0.019,0.122,0.036,0.182,0.057c0.186,0.064,0.368,0.141,0.546,0.227c0.103,0.051,0.203,0.106,0.301,0.164
                            c0.138,0.079,0.276,0.158,0.406,0.25c0.151,0.108,0.29,0.229,0.427,0.353c0.077,0.069,0.162,0.129,0.235,0.204
                            c0.099,0.1,0.179,0.217,0.269,0.326c0.127,0.153,0.256,0.304,0.363,0.469c0.074,0.115,0.131,0.24,0.196,0.361
                            c0.084,0.155,0.173,0.308,0.24,0.471c0.065,0.16,0.107,0.331,0.156,0.5c0.039,0.136,0.091,0.269,0.119,0.408
                            C11.964,48.846,12,49.169,12,49.5c0,0.317-0.037,0.625-0.094,0.926c-0.032,0.164-0.086,0.325-0.135,0.487
                            c-0.051,0.173-0.091,0.35-0.16,0.515l-0.008,0.023C10.842,53.241,9.065,54.5,7,54.5z M17,52.5c-1.205,0-2.336-0.422-3.24-1.199
                            c0.005-0.019,0.007-0.039,0.012-0.059c0.061-0.238,0.11-0.48,0.146-0.726c0.009-0.057,0.019-0.114,0.026-0.171
                            C13.977,50.068,14,49.787,14,49.5c0-0.353-0.035-0.698-0.086-1.037c-0.01-0.064-0.018-0.127-0.029-0.191
                            c-0.059-0.334-0.141-0.66-0.246-0.976c-0.015-0.045-0.033-0.089-0.049-0.133c-0.241-0.677-0.582-1.304-1.007-1.868
                            c-0.007-0.009-0.012-0.02-0.019-0.029c0.057-0.112,0.104-0.231,0.169-0.338c0.032-0.053,0.061-0.107,0.095-0.158
                            c0.175-0.265,0.371-0.515,0.593-0.742c0.016-0.017,0.034-0.031,0.05-0.047c0.235-0.233,0.49-0.447,0.769-0.631
                            c0.001-0.001,0.002-0.002,0.003-0.003c0.292-0.193,0.606-0.357,0.938-0.487l0.074-0.029c0.274-0.104,0.557-0.184,0.848-0.238
                            c0.128-0.024,0.247-0.04,0.362-0.054C16.643,42.519,16.82,42.5,17,42.5c0.301,0,0.592,0.038,0.878,0.089
                            c0.09,0.016,0.18,0.035,0.269,0.057c0.214,0.051,0.422,0.117,0.624,0.194c0.072,0.028,0.147,0.047,0.218,0.079
                            c0.559,0.244,1.064,0.587,1.495,1.007c0.177,0.172,0.326,0.363,0.473,0.555c0.055,0.072,0.121,0.133,0.172,0.208
                            c0.114,0.166,0.198,0.348,0.291,0.525C21.778,45.902,22,46.672,22,47.5c0,0.303-0.038,0.596-0.089,0.884
                            c-0.011,0.061-0.018,0.121-0.031,0.182C21.389,50.812,19.39,52.5,17,52.5z M27,49.5c-1.12,0-2.19-0.372-3.066-1.056
                            c0.003-0.02,0.002-0.04,0.004-0.06C23.975,48.094,24,47.8,24,47.5c0-0.23-0.013-0.458-0.035-0.684
                            c-0.006-0.06-0.017-0.118-0.024-0.178c-0.02-0.167-0.044-0.333-0.076-0.497c-0.012-0.06-0.027-0.119-0.041-0.179
                            c-0.036-0.162-0.076-0.322-0.124-0.48c-0.017-0.055-0.035-0.109-0.053-0.163c-0.052-0.159-0.109-0.315-0.172-0.47
                            c-0.021-0.052-0.044-0.104-0.067-0.156c-0.065-0.149-0.136-0.295-0.212-0.44c-0.029-0.056-0.059-0.111-0.09-0.165
                            c-0.074-0.131-0.152-0.259-0.234-0.385c-0.042-0.064-0.083-0.129-0.127-0.192c-0.074-0.106-0.153-0.209-0.233-0.312
                            c-0.06-0.076-0.119-0.153-0.182-0.227c-0.022-0.026-0.041-0.053-0.063-0.078c0.042-0.125,0.102-0.24,0.153-0.36l0.113-0.23
                            c0.485-0.986,1.294-1.796,2.279-2.28l0.262-0.129c0.073-0.03,0.144-0.064,0.219-0.09c0.158-0.058,0.319-0.1,0.48-0.14
                            c0.083-0.021,0.165-0.043,0.25-0.06c0.146-0.029,0.293-0.048,0.44-0.063c0.097-0.01,0.194-0.018,0.292-0.023
                            c0.14-0.006,0.279-0.007,0.419-0.002c0.192,0.007,0.38,0.029,0.566,0.057c0.197,0.03,0.39,0.072,0.582,0.125
                            c0.144,0.04,0.288,0.081,0.427,0.133c0.132,0.049,0.261,0.105,0.388,0.165c0.147,0.07,0.289,0.149,0.428,0.233
                            c0.095,0.057,0.194,0.108,0.286,0.171c0.202,0.141,0.388,0.3,0.567,0.468c0.189,0.178,0.353,0.373,0.51,0.572
                            c0.054,0.069,0.116,0.13,0.167,0.202c0.13,0.185,0.232,0.384,0.335,0.583c0.052,0.102,0.118,0.195,0.164,0.301
                            c0.082,0.188,0.132,0.389,0.189,0.587c0.036,0.124,0.088,0.241,0.115,0.369C31.963,43.814,32,44.154,32,44.5
                            C32,47.257,29.757,49.5,27,49.5z M37,45.5c-1.085,0-2.134-0.355-3-1.008c0-0.005-0.001-0.009-0.001-0.013
                            c-0.001-0.331-0.032-0.655-0.078-0.974c-0.009-0.058-0.017-0.116-0.027-0.174c-0.117-0.688-0.333-1.342-0.635-1.947
                            c-0.005-0.01-0.01-0.02-0.015-0.03c-0.161-0.317-0.344-0.62-0.549-0.908c-0.001-0.002-0.002-0.004-0.003-0.006
                            c0.478-0.298,0.909-0.656,1.297-1.055c0.067-0.069,0.131-0.14,0.195-0.211c0.15-0.167,0.29-0.341,0.423-0.521
                            c0.059-0.08,0.122-0.156,0.177-0.238c0.153-0.227,0.292-0.463,0.417-0.706c0.074-0.142,0.136-0.29,0.2-0.437
                            c0.049-0.114,0.097-0.229,0.14-0.346c0.067-0.18,0.13-0.36,0.183-0.546c0.008-0.029,0.013-0.058,0.021-0.087
                            c0.053-0.198,0.106-0.396,0.142-0.599C36.261,35.598,36.728,35.5,37,35.5c0.331,0,0.654,0.036,0.967,0.098
                            c0.138,0.027,0.269,0.078,0.403,0.117c0.17,0.049,0.343,0.091,0.505,0.157c0.159,0.065,0.309,0.153,0.461,0.235
                            c0.125,0.067,0.254,0.125,0.372,0.202c0.161,0.105,0.309,0.231,0.459,0.355C41.277,37.581,42,38.951,42,40.5
                            C42,43.257,39.757,45.5,37,45.5z M44,30.5c0,1.884-1.081,3.609-2.739,4.453c-0.018-0.014-0.038-0.023-0.056-0.036
                            c-0.564-0.426-1.192-0.767-1.87-1.008c-0.044-0.016-0.086-0.033-0.13-0.048c-0.317-0.105-0.643-0.187-0.978-0.247
                            c-0.063-0.011-0.126-0.02-0.19-0.029C37.698,33.535,37.353,33.5,37,33.5c-0.024,0-0.114,0.008-0.229,0.02
                            c-0.279,0.009-0.557,0.03-0.833,0.073c-0.003-0.021-0.01-0.042-0.013-0.063c-0.037-0.264-0.089-0.522-0.154-0.775
                            c-0.012-0.045-0.022-0.09-0.035-0.135c-0.169-0.605-0.417-1.175-0.733-1.702c-0.017-0.029-0.034-0.057-0.052-0.085
                            c-0.165-0.266-0.341-0.525-0.539-0.766c0.028-0.01,0.053-0.025,0.08-0.035c0.214-0.081,0.422-0.173,0.625-0.273
                            c0.031-0.016,0.061-0.032,0.092-0.048c0.22-0.114,0.433-0.238,0.639-0.373c0.004-0.003,0.008-0.005,0.012-0.008
                            c1.352-0.894,2.374-2.237,2.847-3.819C41.57,25.331,44,27.646,44,30.5z M46.05,15.55c5.229,0.497,9.403,4.671,9.9,9.9
                            C50.721,24.953,46.547,20.779,46.05,15.55z"/>
                        </svg>
                        <h3 className="services__title">Tradicija u Okusu</h3>
                        <p className="services__description">Ćupter je prirodni i posni slatkiš od nefermentiranog grožđanog soka, bez umjetnih konzervansa i bojila.</p>
                    </div>

                    <div className="services__content">
                        
                        <svg className="services__img" xmlns="http://www.w3.org/2000/svg">
                            <path d="M45.3205 21.5702L44.6357 19.3163C43.7659 16.756 40.9852 15.3857 38.4249 
                            16.2556C36.9847 16.7449 35.8536 17.876 35.3643 19.3163L34.6795 21.5702C34.1032 
                            23.471 33.9823 25.4807 34.3264 27.4368C34.6403 29.0838 35.6859 30.4987 37.168 
                            31.2822L36.4011 48.4267C36.2984 49.3836 36.6088 50.339 37.2544 51.0528C38.6428 
                            52.5715 40.9996 52.6771 42.5183 51.2887C42.6004 51.2136 42.6791 51.135 42.7541 
                            51.0528C43.3853 50.3592 43.6952 49.4319 43.6075 48.4982L42.8363 31.28C44.3164 
                            30.4962 45.3603 29.0822 45.6736 27.4368C46.0177 25.4807 45.8968 23.471 45.3205 
                            21.5702ZM43.5723 27.0656C43.3413 28.2488 42.4981 29.2196 41.3589 29.6139C40.9265 
                            29.7764 40.648 30.1988 40.6688 30.6603L41.4795 48.6667C41.5168 49.0199 41.4003 
                            49.372 41.1595 49.6331C40.5172 50.269 39.4828 50.269 38.8405 49.6331C38.5877 
                            49.351 38.4729 48.9712 38.5269 48.5963L39.3312 30.6603C39.352 30.1988 39.0735 
                            29.7764 38.6411 29.6139C37.5019 29.2196 36.6587 28.2488 36.4277 27.0656C36.1424 
                            25.4416 36.2429 23.7732 36.7211 22.1952L37.4059 19.9403C37.9357 18.5076 39.5267 
                            17.7758 40.9595 18.3056C41.7169 18.5858 42.314 19.183 42.5941 19.9403L43.2789 
                            22.1952C43.7565 23.7734 43.8571 25.4416 43.5723 27.0656Z"/>
                            <path d="M28.8 16C28.2109 16 27.7333 16.4776 27.7333 17.0667V26.2251L24.8459 
                            29.1125C24.6323 29.3253 24.5187 29.6188 24.5333 29.92L25.4667 48.5867C25.4889 
                            48.9892 25.3428 49.3829 25.0635 49.6736C24.4796 50.2627 23.5287 50.2669 22.9395 
                            49.6829C22.9363 49.6799 22.9332 49.6767 22.9301 49.6736C22.6507 49.3829 22.5047 
                            48.9892 22.5269 48.5867L23.4667 29.92C23.4816 29.6189 23.3684 29.3256 23.1552 
                            29.1125L20.2667 26.2251V17.0667C20.2667 16.4776 19.7891 16 19.2 16C18.6109 
                            16 18.1333 16.4776 18.1333 17.0667V26.6667C18.1333 26.9496 18.2459 27.2208 
                            18.4459 27.4208L21.3109 30.2869L20.4011 48.4832C20.3043 50.4708 21.8371 
                            52.1607 23.8247 52.2575C25.8123 52.3543 27.5021 50.8215 27.5989 48.8339C27.6047 
                            48.7171 27.6047 48.6001 27.5989 48.4833L26.6891 30.2871L29.5541 27.4209C29.7541 
                            27.2209 29.8667 26.9497 29.8667 26.6668V17.0668C29.8667 16.4776 29.3891 16 28.8 16Z"/>
                            <path d="M22.4 16C21.8109 16 21.3333 16.4776 21.3333 17.0667V25.6C21.3333 26.1891 
                            21.8109 26.6667 22.4 26.6667C22.9891 26.6667 23.4667 26.1891 23.4667 25.6V17.0667C23.4667 
                            16.4776 22.9891 16 22.4 16Z"/>
                            <path d="M25.6 16C25.0109 16 24.5333 16.4776 24.5333 17.0667V25.6C24.5333 26.1891 
                            25.0109 26.6667 25.6 26.6667C26.1891 26.6667 26.6667 26.1891 26.6667 25.6V17.0667C26.6667 
                            16.4776 26.1891 16 25.6 16Z"/>
                            <path d="M32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64C49.6731 64 64 49.6731 
                            64 32C63.98 14.3352 49.6648 0.02 32 0ZM32 61.8667C15.5051 61.8667 2.13333 48.4949 
                            2.13333 32C2.13333 15.5051 15.5051 2.13333 32 2.13333C48.4949 2.13333 61.8667 
                            15.5051 61.8667 32C61.8479 48.4871 48.4871 61.8479 32 61.8667Z"/>
                            <path d="M35.4625 52.0229C35.4053 51.4367 34.8836 51.0077 34.2972 51.0649C34.2835 
                            51.0663 34.2697 51.0679 34.256 51.0697L34.2603 51.0687C32.7585 51.2431 31.2415 
                            51.2431 29.7397 51.0687C29.1544 51 28.6244 51.4188 28.5557 52.0041C28.4871 
                            52.5895 28.9059 53.1195 29.4912 53.1881C31.1567 53.3827 32.8391 53.3827 
                            34.5045 53.1881C35.0908 53.1311 35.5197 52.6093 35.4625 52.0229Z"/>
                            <path d="M48.32 18.2549C47.9414 17.8035 47.2686 17.7445 46.8173 18.1231C46.8158 
                            18.1243 46.8144 18.1257 46.8128 18.1269C46.3625 18.5066 46.3052 19.1794 46.6848 
                            19.6298C53.1161 27.2645 52.6241 38.5537 45.553 45.5999C45.1357 46.0158 45.1345 
                            46.6914 45.5504 47.1087C45.9662 47.5261 46.6418 47.5273 47.0592 47.1114C54.9174 
                            39.283 55.4654 26.7387 48.32 18.2549Z"/>
                            <path d="M24.851 14.0992C24.8505 14.0992 24.85 14.0991 24.8495 14.0991C24.8487 
                            14.0991 24.8478 14.0992 24.8469 14.0992H24.851Z"/>
                            <path d="M37.0315 11.263C32.8628 10.2639 28.4908 10.5324 24.4757 12.0342C23.9243 
                            12.2415 23.6455 12.8567 23.8528 13.408C24.0091 13.8236 24.4064 14.0987 24.8503 
                            14.0991C24.9779 14.0984 25.1043 14.0751 25.2235 14.0299C28.8392 12.6778 32.7763 
                            12.4363 36.5301 13.3366C37.1028 13.475 37.6792 13.1231 37.8176 12.5504C37.956 
                            11.9778 37.6041 11.4014 37.0315 11.263Z"/>
                            <path d="M18.3989 45.5466C14.8031 41.9569 12.7877 37.081 12.8 32C12.7895 
                            27.9405 14.0753 23.9837 16.4704 20.7061C16.8244 20.2352 16.7296 19.5665 
                            16.2587 19.2125C15.7877 18.8585 15.1191 18.9533 14.7651 19.4243C14.7588 
                            19.4327 14.7527 19.441 14.7467 19.4496C8.5796 27.928 9.48706 39.6308 
                            16.8875 47.057C17.3045 47.4744 17.9811 47.4746 18.3984 47.0576C18.8157 
                            46.6405 18.816 45.964 18.3989 45.5466Z"/>
                        </svg>
                        <h3 className="services__title">Godina u Zalogaju</h3>
                        <p className="services__description">Ćupter je trajni proizvod. Čuva se na sobnoj temperaturi ili u frižideru.</p>
                    </div>

                    <div className="services__content">
                        
                        <svg className="services__img" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0)">
                            <path d="M19.1978 49.6016C17.4308 49.6016 15.9981 51.0342 15.9981 52.8012C15.9981 54.5682 17.4308 
                            56.0008 19.1978 56.0008C20.9648 56.0008 22.3974 54.5682 22.3974 52.8012C22.3974 51.0342 20.9648 
                            49.6016 19.1978 49.6016ZM19.1978 53.8677C18.6088 53.8677 18.1312 53.3902 18.1312 52.8012C18.1312 
                            52.2122 18.6088 51.7347 19.1978 51.7347C19.7868 51.7347 20.2643 52.2122 20.2643 52.8012C20.2643 
                            53.3902 19.7868 53.8677 19.1978 53.8677Z"/>
                            <path d="M50.1275 49.6016C48.3605 49.6016 46.9279 51.0342 46.9279 52.8012C46.9279 54.5682 48.3605 
                            56.0008 50.1275 56.0008C51.8945 56.0008 53.3271 54.5682 53.3271 52.8012C53.3271 51.0342 51.8945 
                            49.6016 50.1275 49.6016ZM50.1275 53.8677C49.5385 53.8677 49.0609 53.3902 49.0609 52.8012C49.0609 
                            52.2122 49.5385 51.7347 50.1275 51.7347C50.7165 51.7347 51.194 52.2122 51.194 52.8012C51.194 
                            53.3902 50.7165 53.8677 50.1275 53.8677Z"/>
                            <path d="M3.19962 21.8715H5.3327V24.0045H3.19962V21.8715Z"/>
                            <path d="M0 26.1377H2.13308V28.2708H0V26.1377Z"/>
                            <path d="M52.2606 11.2061H58.6598V13.3391H52.2606V11.2061Z"/>
                            <path d="M47.9944 11.2061H50.1275V13.3391H47.9944V11.2061Z"/>
                            <path d="M34.1294 4.80676H44.7948V6.93985H34.1294V4.80676Z"/>
                            <path d="M29.8632 4.80676H31.9963V6.93985H29.8632V4.80676Z"/>
                            <path d="M63.9925 59.2005V57.0674H54.8842C55.7935 56.0607 56.3575 54.7906 56.495 53.4412L63.4593 
                            49.461C63.5087 49.4266 63.5556 49.3886 63.5988 49.3469C63.6363 49.3214 63.6723 49.2928 63.7056 
                            49.2626C63.7858 49.1777 63.8514 49.0798 63.8998 48.9735C63.905 48.9636 63.9123 48.9574 63.917 
                            48.948C63.9655 48.8272 63.9915 48.6986 63.9936 48.5684C63.9936 48.5564 63.9998 48.547 63.9998 
                            48.535V38.9362C63.9951 38.9049 63.9889 38.8742 63.9806 38.8435C63.9821 38.8159 63.9821 38.7877 
                            63.9806 38.7601L61.8475 25.9616C61.8428 25.946 61.8371 25.9299 61.8308 25.9148C61.8308 25.9033 
                            61.8308 25.8903 61.8308 25.8788L60.7643 21.6127C60.645 21.1367 60.2169 20.8034 59.7264 20.8049H46.7893C46.6446 
                            20.2852 46.3696 19.8103 45.9905 19.4259L38.708 12.1435C38.1096 11.5414 37.2951 11.204 36.4457 
                            11.2061H10.6654C10.0764 11.2061 9.59888 11.6836 9.59888 12.2726V16.5388H0V18.6719H9.59888V21.8715H7.4658V24.0046H9.59888V26.1377H4.26617V28.2707H9.59888V37.8696C9.00989 
                            37.8696 8.53234 38.3472 8.53234 38.9362V48.535C8.53234 48.5574 8.54432 48.5767 8.54536 48.6001C8.55161 
                            48.6965 8.57088 48.7918 8.60264 48.8829C8.61254 48.9168 8.62451 48.9501 8.63805 48.9829C8.68805 49.0949 
                            8.75679 49.1969 8.84168 49.285L12.8178 53.2611C12.9198 54.6749 13.4911 56.0149 14.441 57.0674H0V59.2005H63.9925ZM44.1016 50.6681H25.2236C25.0929 
                            50.2984 24.9278 49.9411 24.731 49.6016H44.5943C44.3974 49.9411 44.2323 50.2984 44.1016 50.6681ZM25.597 
                            52.8012H43.7282C43.7288 54.3776 44.3141 55.8977 45.3708 57.0674H23.9545C25.0111 55.8977 25.5965 54.3776 
                            25.597 52.8012ZM45.8613 52.8012C45.8613 50.4452 47.7715 48.535 50.1275 48.535C52.4835 48.535 54.3937 
                            50.4452 54.3937 52.8012C54.3937 55.1572 52.4835 57.0674 50.1275 57.0674C47.7715 57.0674 45.8613 55.1572 45.8613 
                            52.8012ZM56.2898 51.0946C56.145 50.5723 55.9336 50.0703 55.6607 49.6016H58.9093L56.2898 51.0946ZM61.6662 
                            37.8696H51.194V27.2042H59.8894L61.6662 37.8696ZM59.4269 25.0711H50.1275C49.5385 25.0711 49.0609 25.5487 
                            49.0609 26.1377V38.9362C49.0609 39.5252 49.5385 40.0027 50.1275 40.0027H61.8595V42.1358H58.6598V44.2689H61.8595V47.4685H53.6578C51.519 
                            46.0463 48.736 46.0463 46.5972 47.4685H22.7281C20.5893 46.0463 17.8063 46.0463 15.6674 
                            47.4685H10.6654V43.2023H14.9316V41.0692H10.6654V40.0027H45.8613C46.4503 40.0027 46.9279 
                            39.5252 46.9279 38.9362V22.938H58.8937L59.4269 25.0711ZM11.732 28.2707H20.2643V26.1377H11.732V24.0046H21.3308V21.8715H11.732V18.6719H17.0647V16.5388H11.732V13.3391H36.4457C36.7285 
                            13.3402 36.9993 13.4527 37.1998 13.6516L44.4823 20.9341C44.6828 21.1341 44.7948 21.4059 44.7948 21.6892V37.8696H11.732V28.2707ZM13.6646 
                            49.6016C13.4766 49.9255 13.3177 50.2661 13.1901 50.6181L12.1736 49.6016H13.6646ZM14.9316 
                            52.8012C14.9316 50.4452 16.8418 48.535 19.1978 48.535C21.5537 48.535 23.4639 50.4452 23.4639 
                            52.8012C23.4639 55.1572 21.5537 57.0674 19.1978 57.0674C16.8418 57.0674 14.9316 55.1572 14.9316 52.8012Z"/>
                                </g>
                                <defs>
                                <clipPath id="clip0">
                                <rect width="64" height="64" fill="white"/>
                                </clipPath>
                                </defs>
                        </svg>
                        <h3 className="services__title">Dostava</h3>
                        <p className="services__description">Isporuku za područje Mostara radimo isti ili sljedeći dan, a za druge destinacije putem kurirske službe uz prethodni dogovor.</p>
                    </div>
                </div>
            </section>

           
            <section className="menu section bd-container" id="menu">
                <span className="section-subtitle">Najpopularija</span>
                <h2 className="section-title">Pakiranja</h2>

                <div className="menu__container bd-grid">
                    <ShopCard 
                    img="/ćupter-ponuda1.webp"
                    name="Bijeli Ćupter" 
                    desc={`1 komad ćuptera od okusa žilavke ili blatine, 100g.\n -1kom`} 
                    price={5} />

                    <ShopCard 
                    img="ćupter-ponuda2.webp"
                    name="Poklon Kutija" 
                    desc={`2 komada ćuptera žilavka i blatina, 200g.\n -2kom`} 
                    price={10} />
                    
                    <ShopCard 
                    img="ćupter-ponuda3.webp"
                    name="Full Box" 
                    desc={`30 komada ćuptera žilavka ili blatina.\n -30kom`} 
                    price={150} />
                </div>
            </section>


            <section className="contact section bd-container" id="contact">
                <div className="contact__container bd-grid">
                    <div className="contact__data">
                        <span className="section-subtitle contact__initial">Kontaktirajte nas</span>
                        <h2 className="section-title contact__initial">Pošaljite nam poruku</h2>
                        <p className="contact__description">Ako imate dodatnih pitanja u vezi ćuptera ili prodaje cuptera slobodno nas kontaktirajte preko email-a.</p>
                    </div>

                    <div className="contact__button">
                        <a href="/contact" className="button">Kontakt</a>
                    </div>
                </div>
            </section>
        </main>
  )
}

export default Home