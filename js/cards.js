/* =========================================
   Cards System
========================================= */

/* ========================= ACADEMIC NETWORK CARDS EFFECT ========================= */

/* Network Card Base */
.network-card {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    position: relative;
    overflow: hidden;
    text-decoration: none;
    user-select: none;
}

/* Hover Effect */
.network-card:hover {
    transform: translateY(-6px) scale(1.03);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12) !important;
}

/* Press / Open Effect */
.network-card.network-open {
    transform: scale(0.9) translateY(12px);
    opacity: 0.82;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18) !important;
    transition: all 0.25s ease;
}

/* Ripple Effect */
.network-card::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(157, 122, 51, 0.25);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.55s ease, height 0.55s ease;
    opacity: 0;
    pointer-events: none;
    z-index: 1;
}

.network-card:active::before {
    width: 280px;
    height: 280px;
    opacity: 0.6;
}

/* Content Protection (عشان الـ ripple ما يغطي النص) */
.network-card > * {
    position: relative;
    z-index: 2;
}
