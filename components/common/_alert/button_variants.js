const variants = {
    'default': {
        name:'default',
        bgColor:'var(--Bg-gray)', 
        textColor:'black',
        borderColor:'--Bg-gray',
        bgHover:'var(--Ria-orange)',
        bgHoverText:'white', 
    },
    'solid-orange': {
        name:'primary',
        bgColor:'var(--Ria-orange)', 
        textColor:'white', 
        borderColor:'var(--Ria-orange)',
        bgHover:'#ff7733',
        bgHoverText:'white', 
    },
    'secondary': {
        name:'secondary',
        bgColor:'var(--Ria-orange)', 
        textColor:'white',
        borderColor:'var(--Ria-orange)',
        bgHover:'white',
        bgHoverText:'var(--Ria-orange)', 
    },
    'outline-orange': {
        name:'outline',
        bgColor:'transparent', 
        textColor:'var(--Ria-orange)',
        borderColor:'var(--Ria-orange)',
        bgHover:'var(--Ria-orange)',
        bgHoverText:'white', 
    },
    'outline-white': {
        name:'outline',
        bgColor:'transparent', 
        textColor:'white',
        borderColor:'white',
        bgHover:'transparent',
        bgHoverText:'white', 
    },
};

export default variants;
