import React from 'react'
import './notfound.css'
export default function NotFoundPage() {
    return (
        <section className="page_404">
            <div>
                <h1 className="nf-title">404</h1>
                <p className="nf-text">Oops! Something is wrong.</p>
                <span className="button"><i className="icon-home" /> Go back in initial page, is better.</span>
            </div>
        </section>

    )
}
