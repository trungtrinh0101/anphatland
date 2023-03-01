var tabContent = {
    init: function() {
        this.activeTab('#main-menu', '.menu-tab', '.main-panel');

    },
    activeTab: function(idContainer, tabItem, tabContent) {
        console.log('activeTab', idContainer);
        let tabs = [...document.querySelectorAll(tabItem)],
            panels = [...document.querySelectorAll(tabContent)]
        document.querySelector(idContainer).addEventListener('click', e => {
            let compareTab = tabs.filter(tab => tab === e.target.parentElement) 
            if (e.target.parentElement === compareTab[0]) { 
                let i = tabs.indexOf(e.target.parentElement) 
                tabs.map(tab => tab.classList.remove('active'))
                tabs[i].classList.add('active')
                panels.map(panel => panel.classList.remove('active'))
                panels[i].classList.add('active')
            }
        })
    }
}
tabContent.init()