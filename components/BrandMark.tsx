/* Cosmox International — the mark: the gold/graphite planet, its alpha, and the
   orbit ring. Traced from `updated logo.jpeg` in the repo root; the full
   lock-up (mark + wordmark) and the one-colour cuts live in `public/logo/`.

   Every number in here was measured off that JPEG, not chosen. The planet is a
   least-squares fit to 1371 radial edge crossings (median residual 0.06px).
   The orbit is fitted by walking its own normal until its stroke sits centred
   on it — and it is **not** concentric with the planet, it sits 1.74px to the
   planet's left and 0.43px above; forcing them to share a centre leaves the
   ring 1.7px sd off its own stroke, which is what used to make its near half
   and its far half disagree. Sharpness is one number here: how far the emitted
   curve strays from the dense contour it came from, which is under 0.8px
   everywhere at this scale. Re-measure rather than nudge.

   It carries no colour of its own for the two parts that have to survive a
   change of ground. `--logo-ink` is the orbit ring — black on paper, white on
   `--night` — and `--logo-void` is the gap that holds the ring off the planet,
   which is whatever is behind the logo. Both are set in `globals.css`: the
   defaults are the light-background cut, which the header capsule keeps, and
   the footer's `.brand` flips them. The sphere and the glyph do not change:
   the alpha is white inside a dark planet, and the gold gets its contrast from
   the graphite it sits on rather than from the ground — which is why the
   planet needs a *light* ground to read as a planet at all (13.4:1 on paper,
   1.38:1 on `--night`, where it dissolves and only the crescent survives).

   `id` prefixes the gradient/clip ids. The mark renders twice per page, and
   two copies of one id is invalid markup — pass a different prefix at each
   site rather than letting them collide. */
export default function BrandMark({ id = "cx" }: { id?: string }) {
  return (
    <svg className="brand__mark" viewBox="297.5 208.5 663.5 511" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-gold`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f6eda8" />
          <stop offset="4%" stopColor="#eed97b" />
          <stop offset="22%" stopColor="#c49641" />
          <stop offset="30%" stopColor="#cca44c" />
          <stop offset="54%" stopColor="#f5e383" />
          <stop offset="72%" stopColor="#ddc26e" />
          <stop offset="100%" stopColor="#b3854a" />
        </linearGradient>
        <linearGradient id={`${id}-dark`} gradientUnits="userSpaceOnUse" x1="0" y1="350" x2="0" y2="720">
          <stop offset="0.0%" stopColor="#2f2f2f" />
          <stop offset="32.4%" stopColor="#2f2f2f" />
          <stop offset="45.9%" stopColor="#3e3e3e" />
          <stop offset="60.8%" stopColor="#3c3c3c" />
          <stop offset="70.3%" stopColor="#383838" />
          <stop offset="81.1%" stopColor="#2d2d2d" />
          <stop offset="94.6%" stopColor="#2c2c2c" />
          <stop offset="100.0%" stopColor="#2b2b2b" />
        </linearGradient>
        <radialGradient id={`${id}-rim`} gradientUnits="userSpaceOnUse" cx="631.02" cy="464.17" r="255.31">
          <stop offset="55%" stopOpacity="0" />
          <stop offset="100%" stopOpacity=".5" />
        </radialGradient>
        <clipPath id={`${id}-globe`}>
          <circle cx="631.02" cy="464.17" r="255.31" />
        </clipPath>
      </defs>

      {/* the far half of the ring, before the planet covers the middle of it */}
      <path d="M313.63 610.39 A348.05 113.26 -24.92 0 1 944.93 317.09" fill="none" stroke="var(--logo-ink, #0b0b0b)" strokeWidth="24.2" />

      <circle cx="631.02" cy="464.17" r="255.31" fill={`url(#${id}-dark)`} />
      <circle cx="631.02" cy="464.17" r="255.31" fill={`url(#${id}-rim)`} />
      <path d="M383 524.8C383.7 524.7 384.3 524.6 385 524.5C387 524.2 389 524 391 523.5C398.7 521.5 406.3 519 414 517.1C423 514.8 431.9 512.5 441 510.8C453.9 508.3 467.1 507.3 480 504.5C482.3 504 483.7 501.1 486 501C505.3 499.8 524.7 501.6 544 500.5C546.3 500.3 547.8 497.5 550 497.3C576.6 494.6 603.5 495 630 491.7C632.6 491.4 633.4 486.7 636 486.6C665.9 484.7 696.1 487.7 726 485.7C728.7 485.5 729.4 481.1 732 480.2C739.7 477.4 748.1 477 756 474.8C763.1 472.9 770.1 470.6 777 467.8C782.8 465.5 788.5 462.8 794 459.8C799.5 456.8 804.9 453.6 810 450C814.9 446.6 819.6 442.9 824 438.9C827.9 435.3 831.5 431.3 835 427.3C837.1 424.9 839.1 422.3 841 419.7C842.8 417.2 844.5 414.8 846 412.1C848.5 407.6 850.3 402.6 853 398.2C854.6 395.6 857 393.6 859 391.3C863 386.6 867.1 382 871.1 377.3A255.31 255.31 0 0 0 383 524.8Z" fill={`url(#${id}-gold)`} />
      <path d="M654 342.9C654.4 343.2 655 343.5 655.2 344C659.3 354.2 662.7 364.8 666.8 375C668.1 378.1 670 380.9 671.2 384C671.6 384.9 671.3 386 671.6 387C674.2 394.1 676.9 401.1 679.8 408C680.3 409.3 681.3 410.3 682 411.5C682.3 411.5 682.8 411.6 683 411.4C683.7 410.7 684.1 409.9 684.5 409L710.9 343L760 342.5C761.7 342.5 763.3 343.1 765 343.3C765 343.9 765.2 344.5 765 345L751.1 375L711.4 457C713.1 460.7 714.5 464.4 716.4 468C717.2 469.5 718.5 470.5 719.2 472C720.2 473.9 720.6 476.1 721.5 478C726 486.8 731.1 495.2 735.5 504C736.1 505.2 735.9 506.8 736.6 508C738.3 511.2 740.7 513.9 742.5 517C743.7 519.2 744.3 521.8 745.6 524C747.3 527.1 749.7 529.9 751.5 533C754.1 537.5 756.1 542.4 758.6 547C759.1 548.1 759.7 549.1 760.6 550C761.4 550.8 762.9 551 763.5 552C767.9 559.8 771.4 568 775.4 576L730 576.2C726.3 576.2 722.7 575.7 719 575.5C718.8 575 718.2 574.4 718.5 574C719.3 573 722.3 573.2 721.8 572C715.4 556.8 706.7 542.7 699.2 528L696 529C692.5 520.3 689.2 511.6 685.5 503C685.2 502.3 684.5 502 684 501.5L666.5 544C665.7 544.1 664.8 544 664 544.4C660.9 545.9 658.1 548 655 549.5C654.4 549.8 653.6 549.2 653 549.5C648.2 551.6 643.8 554.4 639 556.5C638.4 556.8 637.6 556.2 637 556.5C635.2 557.3 633.8 558.8 632 559.5C629.8 560.4 627.2 560.6 625 561.5C623.2 562.2 621.8 563.7 620 564.5C619.4 564.8 618.6 564.3 618 564.5C615.2 565.6 612.8 567.4 610 568.5C608.4 569.1 606.6 568.9 605 569.5C602.2 570.6 599.8 572.4 597 573.5C595.4 574.1 593.6 573.9 592 574.5C590.9 574.9 590.1 576.1 589 576.5C585.4 577.8 581.6 578.2 578 579.5C576.9 579.9 576 580.8 575 581.5C570 579.8 564.9 578.5 560 576.5C554.5 574.2 549.1 571.5 544 568.5C538.4 565.1 533.1 561.4 528 557.4C522.3 552.9 516.7 548.1 511.6 543C508.5 540 506 536.5 503.5 533C500.7 529.1 497.8 525.2 495.6 521C492.5 515.2 489.8 509.1 487.5 503C486.2 499.5 485.4 495.7 484.7 492C483.7 487.4 482.7 482.7 482.6 478C482.4 469.3 483.1 460.7 483.7 452C483.9 449 484.2 446 484.8 443C486 437.6 487.2 432.2 488.9 427C490.9 421.2 493.2 415.5 495.8 410C497.8 405.8 500.1 401.9 502.7 398C505.6 393.5 508.5 389 512.1 385C517.3 379.2 522.9 373.7 529.1 369C537.2 362.9 546 357.6 555 352.9C560.4 350.2 566.1 348.1 572 346.7C580.9 344.7 589.9 343.3 599 342.8C617.3 342 635.7 342.8 654 342.9ZM614 538.5L655.5 458C655.2 456.3 655.4 454.5 654.6 453L622 390C618 389.8 614 389.1 610 389.4C603.9 389.9 597.9 390.8 592 392.3C586.5 393.6 581.2 395.8 576 397.9C575.5 398.1 575.5 399 575 399.2C572.8 400.5 570.2 401.1 568 402.3C565.2 403.9 562.5 405.8 560 407.8C556.6 410.7 553.3 413.7 550.3 417C547.8 419.8 545.6 422.9 543.6 426C542.4 427.9 541.5 429.9 540.6 432C539.5 434.6 538.4 437.3 537.6 440C536.8 442.6 536.3 445.3 535.8 448C535.2 452.3 534.4 456.6 534.4 461C534.3 467 534.6 473.1 535.7 479C536.7 484.5 538.2 489.9 540.5 495C542.9 500.3 546.2 505.3 549.7 510C552.6 514 556 517.5 559.5 521C561.5 523 563.6 524.8 566 526.2C570.1 528.7 574.5 530.7 579 532.4C583.5 534.1 588.3 535.4 593 536.4C597.3 537.3 601.6 537.9 606 538.4C608.7 538.6 611.3 538.4 614 538.5Z" fill="#fff" />

      {/* the near half: the gap first, clipped to the planet so it never shows
          outside it, then the ring itself over the top of it */}
      <g clipPath={`url(#${id}-globe)`}>
        <path d="M944.93 317.09 A348.05 113.26 -24.92 0 1 313.63 610.39" fill="none" stroke="var(--logo-void, #fff)" strokeWidth="44.4" />
      </g>
      <path d="M944.93 317.09 A348.05 113.26 -24.92 0 1 313.63 610.39" fill="none" stroke="var(--logo-ink, #0b0b0b)" strokeWidth="24.2" />
    </svg>
  );
}
