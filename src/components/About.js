import React from 'react'
import { Link } from 'react-router-dom';


function About() {
  const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        margin: '0 auto',
        maxWidth: '800px',
        padding: '20px',
        marginTop:"100px"
    },
    header: {
        backgroundColor: '#f8f9fa',
        borderRadius: '5px',
        padding: '20px 0',
    },
    main: {
        display: 'flex',
        justifyContent: 'space-around',
        padding: '50px 0',
    },
    section: {
        width: '40%',
    },
    button: {
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px',
        cursor: 'pointer',
    },
    footer: {
        backgroundColor: '#f8f9fa',
        padding: '20px 0',
    },
    about: {
        padding: '50px 0',
    },
    testimonials: {
        padding: '50px 0',
    },
};

return (
    <div style={styles.container}>
        <header style={styles.header}>
            <h1>Welcome to Foundit!</h1>
            <p>The best place to find your lost items.</p>
        </header>
        <main style={styles.main}>
            <section style={styles.section}>
                <h2>Lost something?</h2>
                <p>Post it here and let the community help you find it.</p>
                <Link type="button" className="btn btn-dark" to="/signup">SignUp</Link>
            </section>
            <section style={styles.section}>
                <h2>Found something?</h2>
                <p>Post it here and help it get back to its rightful owner.</p>
                <Link type="button" className="btn btn-dark" to="/login">LogIn</Link>
            </section>
        </main>
        <section style={styles.about}>
    <h2>About Foundit</h2>
    <p>Foundit is a community-driven platform that helps people find their lost items. We believe in the power of kindness and cooperation, and we are committed to creating a safe and helpful space for everyone.</p>
    <p>Our mission is to reunite lost items with their rightful owners. We understand how stressful it can be to lose something important, and we want to make the process of finding lost items as easy and efficient as possible.</p>
    <p>At Foundit, we leverage the power of our community to help locate lost items. Users can post about their lost items, and others in the community can help look for them. When a lost item is found, we facilitate the process of returning the item to its owner.</p>
    <p>We also encourage users who have found items to post them on our platform. This way, the person who lost the item has a better chance of finding it.</p>
    <p>Join us today and become a part of our mission to help people find their lost items!</p>
</section>
        <section style={styles.testimonials}>
            <h2>Testimonials</h2>
            <p>"I lost my wallet and Foundit helped me get it back. Thank you, Foundit!" - User A</p>
            <p>"Foundit is a lifesaver. I found my lost dog through this platform." - User B</p>
        </section>
        <footer style={styles.footer}>
            <p>© 2024 Foundit. All rights reserved.</p>
        </footer>
    </div>
);
}

export default About