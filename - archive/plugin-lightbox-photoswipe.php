<?php include "head.php"; ?>
</head>

<body>

	<?php
		/* Photoswipe UI needs to be included before gallery */
		include 'inc/photoswipe-ui.php';
	?>

	<?php /* GROUP ORGANISMS / (NON CORE) / GALLERY / PERCH
	=================================================== */ ?>
	<div class="o-photoswipe c-gallery c-gallery--grid-1" itemscope itemtype="http://schema.org/ImageGallery">

		<figure class="c-gallery__item" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
			<!-- Bigger image loaded from href. data-size is the size of the bigger image -->
			<a href="http://placehold.it/1000x1000/ff0000/999?text=Image" itemprop="contentUrl" data-size="1000x1000">
				<img src="http://placehold.it/500x500/ff0000/999?text=Image" itemprop="thumbnail" alt="Image description" />
			</a>
			<figcaption itemprop="caption description">Image caption 1</figcaption>
		</figure>

		<figure class="c-gallery__item" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
			<a href="http://placehold.it/1000x1000/ff0/999?text=Image" itemprop="contentUrl" data-size="1000x1000">
				<img src="http://placehold.it/500x500/ff0/999?text=Image" itemprop="thumbnail" alt="Image description" />
			</a>
			<figcaption itemprop="caption description">Image caption 2</figcaption>
		</figure>

		<figure class="c-gallery__item" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
			<a href="http://placehold.it/1000x1000/999/000?text=Image" itemprop="contentUrl" data-size="1000x1000">
				<img src="http://placehold.it/500x500/999/000?text=Image" itemprop="thumbnail" alt="Image description" />
			</a>
			<figcaption itemprop="caption description">Image caption 3</figcaption>
		</figure>

		<figure class="c-gallery__item" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
			<a href="http://placehold.it/1000x1000/666/999?text=Image" itemprop="contentUrl" data-size="1000x1000">
				<img src="http://placehold.it/500x500/666/999?text=Image" itemprop="thumbnail" alt="Image description" />
			</a>
			<figcaption itemprop="caption description">Image caption 4</figcaption>
		</figure>

		<figure class="c-gallery__item" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
			<a href="http://placehold.it/1000x1000/000/999?text=Image" itemprop="contentUrl" data-size="1000x1000">
				<img src="http://placehold.it/500x500/000/999?text=Image" itemprop="thumbnail" alt="Image description" />
			</a>
			<figcaption itemprop="caption description">Image caption 4</figcaption>
		</figure>

		<figure class="c-gallery__item" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
			<a href="http://placehold.it/1000x1000/fff/999?text=Image" itemprop="contentUrl" data-size="1000x1000">
				<img src="http://placehold.it/500x500/fff/999?text=Image" itemprop="thumbnail" alt="Image description" />
			</a>
			<figcaption itemprop="caption description">Image caption 4</figcaption>
		</figure>

		<figure class="c-gallery__item" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
			<a href="http://placehold.it/1000x1000/ff0ff0/999?text=Image" itemprop="contentUrl" data-size="1000x1000">
				<img src="http://placehold.it/500x500/ff0ff0/999?text=Image" itemprop="thumbnail" alt="Image description" />
			</a>
			<figcaption itemprop="caption description">Image caption 4</figcaption>
		</figure>

		<figure class="c-gallery__item" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
			<a href="http://placehold.it/1000x1000/ffebcd/999?text=Image" itemprop="contentUrl" data-size="1000x1000">
				<img src="http://placehold.it/500x500/ffebcd/999?text=Image" itemprop="thumbnail" alt="Image description" />
			</a>
			<figcaption itemprop="caption description">Image caption 4</figcaption>
		</figure>

	</div>

	<?php include "footer.php"; ?>