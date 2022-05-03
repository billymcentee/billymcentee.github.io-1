window.pageData = {}

document.addEventListener('DOMContentLoaded', function () {
    let i;
    let pageElements;
    pageData.buttons = {}
    pageData.pages = {}
    pageData.buttons['home-page'] = [
        document.getElementById('home-page-button'),
        document.getElementById('mobile-home-page-button')
    ]
    pageData.buttons['about-page'] = [
        document.getElementById('about-page-button'),
        document.getElementById('mobile-about-page-button')
    ]
    pageData.buttons['arts-journalism-page'] = [
        document.getElementById('arts-journalism-page-button'),
        document.getElementById('mobile-arts-journalism-page-button')
    ]
    pageData.buttons['scripts-and-screenplays-page'] = [
        document.getElementById('scripts-and-screenplays-page-button'),
        document.getElementById('mobile-scripts-and-screenplays-page-button')
    ]
    pageData.buttons['podcast-page'] = [
        document.getElementById('podcast-page-button'),
        document.getElementById('mobile-podcast-page-button')
    ]
    pageData.buttons['awards-and-press-page'] = [
        document.getElementById('awards-and-press-page-button'),
        document.getElementById('mobile-awards-and-press-page-button')
    ]
    pageData.buttons['contact-page'] = [
        document.getElementById('contact-page-button'),
        document.getElementById('mobile-contact-page-button')
    ]
    pageElements = document.getElementsByClassName('page')
    for (i = 0; i < pageElements.length; i++) {
        pageData.pages[pageElements[i].id] = pageElements[i]
    }
    for (buttonName in pageData.buttons) {
        pageData.buttons[buttonName].forEach(buttonElement => {
            buttonElement.addEventListener('click', buttonClick.bind(null, [buttonName], (buttonElement.id.includes('mobile'))))
        })
    }
    document.getElementById('secondary-about-link').addEventListener('click', buttonClick.bind(null, ['about-page']))
    document.getElementById('secondary-contact-link').addEventListener('click', buttonClick.bind(null, ['contact-page']))
    setupArtsJournalismSection('article')
    document.getElementById('organize-by-outlet').addEventListener('click', setupArtsJournalismSection.bind(null, 'outlet'))
    document.getElementById('organize-by-article').addEventListener('click', setupArtsJournalismSection.bind(null, 'article'))
    document.addEventListener('scroll', () => {
        document.getElementById('homepage-box').classList.remove('invisible')
    })
    document.getElementById('mobile-list-expander').addEventListener('click', () => {
        let element = document.getElementById('mobile-page-list')
        if (element.className.includes('closed')) {
            element.classList.remove('closed')
        } else {
            element.classList.add('closed')
        }
    })
}, false)

let buttonClick = (selectedPages, mobile) => {
    clearContent()
    if (mobile) {
        document.getElementById('mobile-page-list').classList.add('closed')
    }
    window.scrollTo(0, 0)
    selectedPages.forEach(pageName => {
        pageData.pages[pageName].classList.remove('nondisplay')
    })
}

let clearContent = () => {
    for (pageName in pageData.pages) {
        pageData.pages[pageName].classList.add('nondisplay')
    }
}

let setupArtsJournalismSection = (organizeBy) => {
    document.getElementById(`arts-journalism-articles-by-${organizeBy}`).classList.remove('nondisplay')
    document.getElementById(`arts-journalism-articles-by-${organizeBy === 'article' ? 'outlet' : 'article'}`).classList.add('nondisplay')
    let newTab = document.getElementById(`organize-by-${organizeBy}`)
    let oldTab = document.getElementById(`organize-by-${
        organizeBy === 'article' ? 'outlet' : 'article'
    }`)
    newTab.classList.add('selected-tab')
    oldTab.classList.remove('selected-tab')
}
