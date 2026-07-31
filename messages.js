const messages = [
    {
        date: "1 août",
        surnom: "Mon cœur",
        texte: `

        Coucou mon coeur, 
       
        Si tu ouvres ce mot c'est que tu es parti... 
        Et moi je commence deja a compter les jours. Profite a fond de tes vacances et de tes copains amuse toi bien.
        Je pense très fort a toi.
        Je t'aime ❤️
        
        `
    },

    {
        date: "2 août",
        surnom: "Chouchou",
        texte: `
        Coucou chouchou ❤️

        J'espère que tu as bien dormi et que ta journée commence bien.

        Aujourd'hui je voulais simplement te dire qu'en réalité t'es un peu plus haut que le top 20 de mes personnes préférées mdr.

        Profite de ta journée et garde un petit sourire pour moi. 

        Je t'aime. 
        `
    },

    {
        date: "3 août",
        surnom: "Mon amour",
        texte: `
        Coucou chou.

        Petite mise en garde aujourd'hui.
        Juste te prévenir que chaque jour que tu passes sans moi augmente le nombre de bisous que tu vas me devoir
        a la fin de tes vacances ( quand tu vas me retrouver )
        
        Et tant qu'à y être autant te donner mon ordre principal : NE ME TROMPE PAS STP ( même si tu vois une belle 2007 )
        
        Je t'aime ❤️
        `
    },

    {
        date: "4 août",
        surnom: "Chou",
        texte: `
        Petit défi du jour :
        
        Pense a moi au moins 5 fois dans la journée et surtout rappelle toi a quel moment précis tu l'a fait, 
        et ce soir appelle moi pour tout me raconter. 
        
        Tu vas y arriver, t'es le meilleur 
        
        Je t'aime ❤️
        `
    },

    {
        date: "5 août",
        surnom: "Mathieu",
        texte: `
        Raisons de pourquoi je t'aime ( je pourrai pas tout dire 
        mais juste quelques uns pour te donner le sourire et bien commencer la journée )
            - tu me fais rire 100% du temps 
            - tu me rassures quand j'en ai besoin 
            - t'es a l'écoute et très attentionné 
            - tu rends mes journées tellement meilleures 
            - t'es fidèle ( fin je l'espère mais j'ai confiance ) 
            - tout simplement parce que tu es TOI et c'est parfait 
            - evidemment parce que t'es super beau aussi ça compte 
            
        Bref, je t'aime ❤️
        `
    },

    {
        date: "6 août",
        surnom: "Mon cœur",
        texte: `
        Coucou mon coeur 
        
        J'ai 3 ordres a te donner aujourd'hui, qui en réalité valent un peu pour tous les jours.
        
        Tu peux les mettres dans l'ordre de préférence que tu veux mais c'est hyper important que tu les respecte :
                - amuse toi
                - mets de la crème solaire par pitié 
                - aime moi très fort 
     
        
        Je t'aime ❤️
        `
    },

    {
        date: "7 août",
        surnom: "Chouchou",
        texte: `
        Rien de spécial a te dire aujourd'hui seulement le plus important, je t'aime plus que tout mon amour ❤️
        `
    },

    {
        date: "8 août",
        surnom: "Mon amour",
        texte: `
        Ouais j'avoue jsuis grave jalouse de toutes les meufs qui veulent te pécho en boite, 
        mais elles ont de la chace de te voir le soir elles au moins. 
        
        En vrai j'rigole bb ( ou pas ), mais je veux que tu profites a fond 
        de ton dernier jour et soir avec tes 777 d'amour
        Sans m'oublier bien sur, pense quand même a moi a chaque fois qu'une meuf s'approche de toi❤️

        Je t'aime ❤️
        `
    },

    {
        date: "9 août",
        surnom: "Chou",
        texte: `
        Aujourd'hui je voulais juste déposer un petit sourire et pleins de bonnes choses dans ta journée.

        J'espère que ce mot y arrivera. 
        Fin surtout que j'y arriverai, parce que logiquement juste en te disant 
        que c'est moi qui l'ai écrit ca doit te donner le sourire 😊

        Bref je t'aime chou ❤️
        `
    },

    {
        date: "10 août",
        surnom: "Mathieu",
        texte: `
        La moitié du temps est passé.
        J'espère que ces quelques mots t'ont fait plaisir.

        J'ai tellement hâte de te voir 

        Je t'aime ❤️
        `
    },

    {
        date: "11 août",
        surnom: "Mon cœur",
        texte: `
        Coucou chouchou,
        
        J'espère que t'as bien dormi mais je me doute que oui puisque Astier arrive aujourd'hui tu dois être content, 
        profite bien du temps avec lui, régalez vous, mais fais pas de conneries quand même hein

        Bisous mon amour, je t'aime ❤️
        `
    },

    {
        date: "12 août",
        surnom: "Chouchou",
        texte: `
        MERCI D'ETRE TOI MATHIEU, merci de m'aimer comme tu le fais, 
        merci de rendre mes journées plus belles (fin quand t'es la surtout ), 
        merci de faire partie de ma vie, merci de me faire sourire tout le temps. 
        J'en ai des milliers d'autres en tête mais je peux pas tout écrire, 
        enfin bref t'es tellement parfait. 
        
        Je t'aime ❤️
        `
    },

    {
        date: "13 août",
        surnom: "Mon amour",
        texte: `
        Je t'aime TRES TRES TRES TRES TRES TRES TRES TRES TRES TRES TRES TRES TRES fort 
        ( juste pour que tu sois sur haha )
        
        Passe une bonne journée mon amour, régale toi❤️
        `
    },

    {
        date: "14 août",
        surnom: "Chou",
        texte: `
        Coucou chou, 
        
        Je commence a vraiment stresser pour la plongée mais j'ai tellement hâte d'un coté, j'espère que je vais pas mourir 
        
        Enfin bref fallait que jte le dise haha, 
        Sinon j'espère que toi tu te régales avec tout le monde, 
        que t'as bien retrouvé tes neveux ( demande a Sandro si il est toujours amoureux de moi mdrrr ), 
        tu leur fera un bisous de ma part a tous les deux. 

        Si tu savais a quel point j'ai hâte de te serrer dans mes bras. 
        Je te souhaite une bonne journée mon amour, 

        Je t'aime ❤️
        `
    },

    {
        date: "15 août",
        surnom: "Mathieu",
        texte: `
        Coucou mon coeur, 

        Je te souhaite de passe une magnifique journée entouré de ta famille, 
        profite de chaques instants, ils sont précieux.
        Et même si je ne suis pas la avec toi aujourd'hui, sache que je pense a toi du matin au soir NON STOP. 
        Tu me manque, je t'aime plus que tout ❤️

        `
    },

    {
        date: "16 août",
        surnom: "Mon cœur",
        texte: `
        Tu me manques tellement mon amour. Je t'aime de tout mon coeur. ❤️
        `
    },

    {
        date: "17 août",
        surnom: "Chouchou",
        texte: `
        Prends en photo toutes les belles choses que tu vois dans ta journée, 
        je veux que tu les partage un peu avec moi. 
        ( tu peux t'inclure dedans, je sais déjà que t'es magnifique )
        
        Je t'aime ❤️
        `
    },

    {
        date: "18 août",
        surnom: "Mon amour",
        texte: `
        Coucou mon amour, 

        Bon j'avoue j'arrive un peu en panne d'inspirations la, 
        parce qu'en rélaité la seule véritable chose a laquelle je pense c'est que je t'aime très fort, 
        que tu me manque et que j'ai hâte de prendre le bâteau et de te rejoindre pour te faire pleins de bisous. 

        Profite bien de l'arrivée de Tom, 

        Je t'aime ❤️
        

    {
        date: "19 août",
        surnom: "Chou",
        texte: `
        L'avant-dernièr petit mot.
        
        Profite, il te reste plus qu'un dodo tout seul, demain j'arrive haha. 
        J'ai hyper hâte 
        Bisous mon coeur, passe une bonne journée. 
        je t'aime ❤️
        `
    },

    {
        date: "20 août",
        surnom: "Mathieu",
        texte: `
        Voilà c'est le dernier mot de tes vacances.

        J'espère que chacun t'aura apporté un petit sourire.

        Au fait j'ai une bonne nouvelle pour toi parce que dans quelques heures, J'ARRIVEEEE.
        J'ai vraiment hâte de te serrer dans mes bras. 
        
        Je t'aime fort mon amour ❤️
        `
    }
];
