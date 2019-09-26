<body>
    <section class="columns is-mobile">
        <div class="column is-12">
            <h1 class="title is-center">Todas las batallas</h1>

            <?php foreach (($battles?:[]) as $battle): ?>
                <div class="columns">
                    <div class="column is-6 is-offset-3">
                        <a href="<?= ($battle[1]) ?>" target="_blank"><img src="<?= ($battle[0]) ?>" alt="Banner battle"></a>
                    </div>
                </div>
            <?php endforeach; ?>
            
        </div>
    </section>