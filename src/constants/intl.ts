export enum ELang {
    En = 'en',
    Ru = 'ru'
}

export const INTL: Record<ELang, Record<string, string>> = {
    [ELang.Ru]: {
        exp_link: 'Мой опыт.\nПроекты.',
        chat_link: 'Связаться со мной',
        owner: 'Медведев Антон',
        job: 'Web-Разработчик',
        description: 'Помогаю бизнесу запускать и развивать свои продукты',
        develop: 'Разработка',
        support: 'Поддержка',
        develop_text: 'Создание и настройка продукта с нуля. Чистый, поддерживаемый код, адаптивная верстка.',
        support_text: 'Поддержка и развитие уже готового продукта. Рефакторинг кода, рекомендации по улучшению работы готового сайта.',
        talk: 'Обсудить проект'
    },
    [ELang.En]: {
        exp_link: 'My Experience.\nProjects.',
        chat_link: 'Contact me',
        owner: 'Medvedev Anton',
        job: 'Web Developer',
        description: 'I help businesses launch and develop their products',
        develop: 'Develop',
        support: 'Support',
        develop_text: 'Creating and configuring a product from scratch. Clean, supported code, adaptive layout.',
        support_text: 'Support and development of the finished product. Code refactoring, recommendations for improving the performance of the finished site.',
        talk: 'Discuss project'
    }
};