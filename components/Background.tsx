background:
radial-gradient(circle at top,#1d1208 0%,#0d0d0d 35%,#090909 100%);

<div
className="
absolute
left-1/2
top-0
h-[900px]
w-[900px]
-translate-x-1/2
rounded-full
bg-orange-400/5
blur-[220px]
"
/>

@keyframes floatGlow{
0%{
transform:translate(0,0);
}
50%{
transform:translate(20px,-30px);
}
100%{
transform:translate(0,0);
}
}

className="animate-[floatGlow_12s_ease-in-out_infinite]"

mask-image:
linear-gradient(
to bottom,
transparent,
white 20%,
white 80%,
transparent
);

<div
className="
absolute
inset-0
bg-[radial-gradient(circle,transparent_55%,rgba(0,0,0,0.55)_100%)]
"
/>

{/* Main glow */}
<div className="bg-orange-500/7 ..." />

{/* Secondary glow */}
<div className="bg-orange-300/4 ..." />

opacity-[0.02]

mix-blend-overlay
opacity-20

<div
className="
absolute
top-[-200px]
left-1/2
h-[700px]
w-[1200px]
-translate-x-1/2
rounded-full
bg-gradient-to-r
from-orange-500/10
via-orange-300/5
to-transparent
blur-[180px]
"
/>
