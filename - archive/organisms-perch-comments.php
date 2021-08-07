<?php include "head.php"; ?>
</head>

<body>
	<div id="comments" class="c-comments-area s-forms-block">
		<h2>
			Comments
		</h2>
		<ol class="o-comment-list">
			<li id="comment111" class="c-comment">
				<div class="comment-body">
					<div class="c-comment-author vcard">
						<img src="//www.gravatar.com/avatar/e6a042553edc475cda59f8f62df2a86c?s=120&amp;d=mm" width="60" height="60" class="c-avatar">
						<cite class="fn">
							dotnetCarpenter
						</cite>
						<span class="says">says:</span>
					</div>
					<div class="o-comment-meta commentmetadata">
						<span rel="bookmark" class="date">
							May 2nd 2013
						</span>
					</div>
					<p>thanks for putting this together.. Probably one of the easiest to follow pieces I’ve seen on rem and VERTICAL SPACING. just one question, why not use units when you declare line-height?</p>
				</div>
			</li>
			<li id="comment112" class="c-comment">
				<div class="comment-body">
					<div class="c-comment-author vcard">
						<img src="//www.gravatar.com/avatar/d41d8cd98f00b204e9800998ecf8427e?s=120&amp;d=mm" width="60" height="60" class="c-avatar">
						<a href="http://twitter.com/SparrwHawk">
							<cite class="fn">
								Jay George
							</cite>
							<span class="says">says:</span>
						</a>
					</div>
					<div class="o-comment-meta commentmetadata">
						<span rel="bookmark" class="date">
							May 3rd 2013
						</span>
					</div>
					<p>
						Hi there, glad you liked the post. I’ll have time to do more of these one day! Pixels are absolute units so they destroy any relationship between different elements whereas if line-height is unit-less it’s like saying “2 times the base font size” or “1.4 times the base font size” or whatever the value is, and there is always a dynamic relationship there.
					</p>
					<p>
						Another way of putting it is that pixel units don’t “track your font-size”, as Harry Roberts puts it in his article http://csswizardry.com/2011/12/measuring-and-sizing-uis-2011-style/</p>
				</div>
			</li>
			<li id="comment113" class="c-comment">
				<div class="comment-body">
					<div class="c-comment-author vcard">
						<img src="//www.gravatar.com/avatar/775cbfd26281f6c537f9d25a75734701?s=120&amp;d=mm" width="60" height="60" class="c-avatar">
						<cite class="fn">
							Bart
						</cite>
						<span class="says">says:</span>
					</div>
					<div class="o-comment-meta commentmetadata">
						<span rel="bookmark" class="date">
							October 19th 2013
						</span>
					</div>
					<p>
						What about simplifying a bit and just sticking to font-size and line-height for headings. No need for margins or padding. You’ll also get the extra space above heading from the bottom margin of previous p element.
					</p>
				</div>
			</li>
			<li id="comment114" class="c-comment">
				<div class="comment-body">
					<div class="c-comment-author vcard">
						<img src="//www.gravatar.com/avatar/b967390c1c9c3afe250ddc06c48bf281?s=120&amp;d=mm" width="60" height="60" class="c-avatar">
						<a href="http://sow.so/">
							<cite class="fn">
								s10wen
							</cite>
							<span class="says">says:</span>
						</a>
					</div>
					<div class="o-comment-meta commentmetadata">
						<span rel="bookmark" class="date">
							June 22nd 2014
						</span>
					</div>
					<p>
						Was just talking about this exact topic the other day, had a quick skim read, looks good! Looking forward to reading over thoroughly.
					</p>
				</div>
			</li>
			<li id="comment115" class="c-comment">
				<div class="comment-body">
					<div class="c-comment-author vcard">
						<img src="//www.gravatar.com/avatar/a77fabf36ea240cf67c40427d6bde275?s=120&amp;d=mm" width="60" height="60" class="c-avatar">
						<cite class="fn">
							jaygeorge
						</cite>
						<span class="says">says:</span>
					</div>
					<div class="o-comment-meta commentmetadata">
						<span rel="bookmark" class="date">
							June 23rd 2014
						</span>
					</div>
					<p>
						It’s definitely an interesting concept that I explored last year. Right now I actually don’t think it’s worth the effort of matching the baseline rhythm; it’s too delicate and against the idea of ebb and flow. I still think it’s a useful exercise and in retrospect it’s at least worth keeping margin and padding consistent (I actually tie values to group selectors… or you could use an extend with Sass).
					</p>
				</div>
			</li>
		</ol>
	</div>

	<form id="form1_comment" class="c-comment-respond" action="/blog/vertical-rhythm-with-ems-and-rems" method="post">
		<div class="c-comment-respond__notes">
			<h2>
				Leave a comment
			</h2>
			<p>
				Your email address will not be published
			</p>
		</div>
		<fieldset>
			<legend>
				Leave a comment
			</legend>
			<div class="o-form-cols o-form-cols--2">
				<div class="o-form-cols__col">
					<label for="form1_commentName">
						Name
					</label>
					<input id="form1_commentName" name="commentName" type="text" required="required">

				</div>
				<div class="o-form-cols__col">
					<label for="form1_commentEmail">
						Email
					</label>
					<input id="form1_commentEmail" name="commentEmail" type="email" required="required">
				</div>
			</div>
			<div>
				<label for="form1_commentURL">
					Website
				</label>
				<input id="form1_commentURL" name="commentURL" placeholder="http://" type="url">
			</div>
			<div>
				<label for="form1_commentHTML">
					Comment
				</label>
				<textarea id="form1_commentHTML" name="commentHTML" cols="30" rows="4" required="required">
				</textarea>
			</div>
			<div>
				<input id="form1_postID" name="postID" value="17" type="hidden">
				<input id="form1_submitComment" name="submitComment" value="Submit" type="submit">
				<input type="hidden" name="cms-form" value="Y29tbWVudDpwZXJjaF9ibG9nOi90ZW1wbGF0ZXMvYmxvZy9jb21tZW50X2Zvcm0uaHRtbDoxNDgyMDg2MzMz">
			</div>
		</fieldset>
	</form>

	<?php include "footer.php"; ?>