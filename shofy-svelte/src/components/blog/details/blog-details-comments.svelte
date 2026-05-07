<script lang="ts">
	// Define the data structure for comments
	interface Comment {
		name: string;
		date: string;
		avatar: string;
		message: string;
		replies: Comment[]; // Nested replies for each comment
	}

	// Example comment data
	let commentData: Comment[] = [
		{
			name: 'Lance Bogrol',
			date: '12 April, 2023 at 3.50pm',
			avatar: '/img/users/user-2.jpg',
			message:
				'By defining and following internal and external processes, your team will have clarity on resources to attract and retain customers for your business.',
			replies: [
				{
					name: 'Dasy Lily',
					date: '12 April, 2023 at 3.50pm',
					avatar: '/img/users/user-3.jpg',
					message:
						'By defining and following internal and external processes, your team will have clarity on resources to attract and retain customers for your business.',
					replies: []
				}
			]
		},
		{
			name: 'Shahnewaz Sakil',
			date: '12 April, 2023 at 3.50pm',
			avatar: '/img/users/user-4.jpg',
			message:
				'By defining and following internal and external processes, your team will have clarity on resources to attract and retain customers for your business.',
			replies: []
		}
	];
</script>

<!-- svelte-ignore a11y_invalid_attribute -->
<div class="tp-postbox-details-comment-wrapper">
	<h3 class="tp-postbox-details-comment-title">Comments ({commentData.length})</h3>
	<div class="tp-postbox-details-comment-inner">
		<ul>
			{#each commentData as comment}
				<li>
					<div class="tp-postbox-details-comment-box d-sm-flex align-items-start">
						<div class="tp-postbox-details-comment-thumb">
							<img src={comment.avatar} alt={comment.name} />
						</div>
						<div class="tp-postbox-details-comment-content">
							<div
								class="tp-postbox-details-comment-top d-flex justify-content-between align-items-start"
							>
								<div class="tp-postbox-details-comment-avater">
									<h4 class="tp-postbox-details-comment-avater-title">{comment.name}</h4>
									<span class="tp-postbox-details-avater-meta">{comment.date}</span>
								</div>
								<div class="tp-postbox-details-comment-reply">
									<a href="#">Reply</a>
								</div>
							</div>
							<p>{comment.message}</p>
						</div>
					</div>
					<!-- Replies section -->
					{#if comment.replies.length > 0}
						<ul class="children">
							{#each comment.replies as reply}
								<li>
									<div class="tp-postbox-details-comment-box d-sm-flex align-items-start">
										<div class="tp-postbox-details-comment-thumb">
											<img src={reply.avatar} alt={reply.name} />
										</div>
										<div class="tp-postbox-details-comment-content">
											<div
												class="tp-postbox-details-comment-top d-flex justify-content-between align-items-start"
											>
												<div class="tp-postbox-details-comment-avater">
													<h4 class="tp-postbox-details-comment-avater-title">{reply.name}</h4>
													<span class="tp-postbox-details-avater-meta">{reply.date}</span>
												</div>
												<div class="tp-postbox-details-comment-reply">
													<a href="#">Reply</a>
												</div>
											</div>
											<p>{reply.message}</p>
										</div>
									</div>
								</li>
							{/each}
						</ul>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
</div>
