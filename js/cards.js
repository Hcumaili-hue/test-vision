/* =========================================
   Cards System
========================================= */


/* =========================
ACADEMIC NETWORK EFFECT
========================= */
.network-card {
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

/* Press / Open Effect */
.network-card.network-open {
    transform: scale(0.92) translateY(8px);
    opacity: 0.85;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15) !important;
}

/* Optional: Ripple Effect */
.network-card::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(157, 122, 51, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
    opacity: 0;
    pointer-events: none;
}

.network-card:active::before {
    width: 300px;
    height: 300px;
    opacity: 1;
}
