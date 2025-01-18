<script lang="ts">
	import { onMount } from 'svelte';
	import { scrollTo, scrollRef, scrollTop } from 'svelte-scrolling';
	import { enhance } from '$app/forms';

	// Settings for auto-typing
	let visibleText = '';
	let phrases = ['Software Developer', 'Student', 'Freelance Programmer', 'Tech Enthusiast'];
	let phraseIndex = 0;
	let phrase = phrases[phraseIndex];
	let charIndex = 0;
	let typing = true;
	let pendingDelay = 0; // Delay before starting to type the next phrase

	onMount(() => {
		const autoTypeInterval = setInterval(() => {
			// Wait until the delay has run out before continuing
			if (pendingDelay > 0) {
				pendingDelay -= 100;
				return;
			}

			if (typing) {
				if (charIndex < phrase.length) {
					visibleText += phrase[charIndex];
					charIndex++;
				} else if (charIndex === phrase.length) {
					pendingDelay = 2000;
					typing = false;
				}
			} else {
				if (visibleText.length > 0) {
					visibleText = visibleText.slice(0, -1);
				} else {
					pendingDelay = 1500;
					typing = true;
					phraseIndex = (phraseIndex + 1) % phrases.length;
					phrase = phrases[phraseIndex];
					charIndex = 0;
				}
			}
		}, 100);

		return () => clearInterval(autoTypeInterval);
	});

	export let data;
</script>

<div class="initial-viewport">
	<nav>
		<ul>
			<li><a href="/#home" on:click={() => scrollTop()}>Home</a></li>
			<li><a href="/#about" use:scrollTo={'about'}>About</a></li>
			<li><a href="/#projects" use:scrollTo={'projects'}>Projects</a></li>
			<li><a href="/#contact" use:scrollTo={'contact'}>Contact</a></li>
		</ul>
	</nav>

	<div class="hero">
		<h1 class="hero-heading">Hi, I'm Arnav</h1>
		<h2 class="hero-subheading">
			I'm a <span class="hero-autotype">{visibleText}</span><span class="hero-autotype-cursor"
				>|</span
			>
		</h2>
		<div class="hero-button-container">
			<a href="/#about" class="hero-button" use:scrollTo={'about'}>View My Work</a>
		</div>
	</div>
</div>

<div class="contents">
	<section id="about" use:scrollRef={'about'}>
		<h3 class="section-heading">About Me</h3>
		<div class="about-content">	
			<p class="about-me">
				I'm a full-stack developer with a passion for building web applications. In addition to being
				the founder and lead programmer at ProfitGreen, I'm a freelance software developer. Feel free 
				to check out my favorite technologies!
			</p>
			<div class="about-icons">
				{#each data.icons as icon}
					<div class="about-icon">
						<img src={icon.src} alt={icon.alt} />
					</div>	
				{/each}
			</div>
		</div>
	</section>
	<section id="projects" use:scrollRef={'projects'}>
		<h3 class="section-heading">Projects</h3>
		<div class="project-container">
			{#each data.projects as project}
				<a href={project.url} target="_blank" class="project">
					<h4 class="project-name">{project.name}</h4>
					<p class="project-description">{project.description}</p>
					<img src={project.image} alt={project.name} class="project-image" />
				</a>
			{/each}
		</div>
	</section>
	<section id="contact" use:scrollRef={'contact'}>
		<h3 class="section-heading">Contact</h3>
		<form method="POST" id="contact-form" use:enhance>
			<div class="form-row">
				<div class="form-group">
					<label for="name" class="form-label">Name</label>
					<input
						type="text"
						id="name"
						name="name"
						class="form-input"
						autocomplete="off"
						placeholder="John Doe"
						required
					/>
				</div>
				<div class="form-group">
					<label for="email" class="form-label">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						class="form-input"
						autocomplete="off"
						placeholder="johndoe@example.com"
						required
					/>
				</div>
			</div>
			<label for="message" class="form-label">Message</label>
			<textarea id="message" name="message" placeholder="Type a message here" required />
			<button type="submit" id="contact-submit">Send Message</button>
		</form>
	</section>
</div>

<style>
	/* Overall page styles */

	/* Use this to hide all contents below the hero section on page load */
	.initial-viewport {
		height: 100vh;
		display: grid;
	}

	.contents {
		text-align: center;
		padding: 0 10rem;
	}

	/* Navbar styles */

	nav {
		padding: 1rem 0;
		text-align: center;
	}

	nav ul {
		display: inline-block;
		list-style: none;
		padding: 0;
	}

	nav ul li {
		display: inline;
		margin: 0rem 0.5rem;
	}

	nav ul li a {
		text-decoration: none;
	}

	/* Hero section styles */

	.hero {
		margin: -4rem 0 2rem;
		text-align: center;
	}

	.hero-heading {
		font-size: 6rem;
		color: #fff;
		margin: 0;
	}

	.hero-subheading {
		font-size: 2.5rem;
		color: gainsboro;
		font-weight: 400;
		margin: 0;
	}

	.hero-autotype {
		color: var(--color-green);
		font-weight: 600;
	}

	.hero-autotype-cursor {
		animation: blink 2s infinite;
	}

	.hero-button-container {
		margin-top: 2rem;
	}

	.hero-button {
		padding: 1rem 2rem;
		border: 2px solid gainsboro;
		border-radius: 10px;
		background-color: transparent;
		color: gainsboro;
		font-size: 1.4rem;
		text-decoration: none;
	}

	.hero-button:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}

	/* General section styles */

	section {
		margin: 2rem 0 6rem 0;
		padding-top: 2rem; /* Add padding so it is framed better during smooth scolling */
	}

	.section-heading {
		font-size: 3rem;
		color: #fff;
		margin: 0.5rem 0;
		border-bottom: 2px dotted gainsboro;
		padding-bottom: 0.5rem;
		display: inline-block;
	}

	/* About section styles */

	.about-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 2rem;
		margin-top: 1rem;
	}

	.about-me {
		margin: 0;
		font-size: 1.5rem;
		color: gainsboro;
		line-height: 1.5;
		font-weight: 400;
	}

	.about-icons {
		display: grid;
		grid-auto-rows: max-content;
		grid-template-columns: repeat(6, 1fr);
		column-gap: .75rem;
		row-gap: .75rem;
	}

	.about-icon {
		background-color: rgba(255, 255, 255, 0.05);
		border-radius: 15px;
		border: 2px solid gainsboro;
		padding: 0.5rem;
	}

	.about-icon img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	/* Projects section styles */

	.project-container {
		display: grid;
		grid-template-columns: calc(50% - 1rem) calc(50% - 1rem);
		column-gap: 2rem;
	}

	.project {
		display: grid;
		grid-template-rows: auto 1fr auto;
		text-decoration: none;
		margin: 1rem 0;
		padding: 1.5rem;
		border: 2px solid gainsboro;
		border-radius: 15px;
		transition:
			transform 0.2s ease,
			box-shadow 0.2s;
	}

	.project:hover {
		background-color: rgba(255, 255, 255, 0.05);
		transform: translateY(-10px);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
	}

	.project-name {
		font-size: 2rem;
		color: #fff;
		margin: 0;
	}

	.project-description {
		margin: 0.5rem 0;
		font-size: 1.25rem;
		color: gainsboro;
		line-height: 1.5;
	}

	.project-image {
		width: 100%;
		margin-top: 1rem;
		border-radius: 10px;
		align-self: end;
		border: 2px solid gainsboro;
	}

	/* Contact section styles */

	#contact-form {
		margin: 1rem 0;
		text-align: left;
	}

	.form-row {
		display: grid;
		grid-template-columns: 1fr 1fr; /* Ensure columns take equal space */
		column-gap: 2rem; /* Add a 2rem gap between columns */
		width: 100%;
		margin: 0.5rem 0;
	}

	.form-group {
		display: grid;
		grid-template-rows: auto auto; /* Ensure label and input stack vertically */
		width: 100%; /* Ensure form group takes full width of its container */
	}

	.form-label {
		color: gainsboro;
		font-size: 1rem;
		padding-left: 1rem;
	}

	.form-input {
		padding: 0.75rem 1rem;
		margin: 0.5rem 0;
		border: 2px solid gainsboro;
		border-radius: 10px;
		background-color: rgba(255, 255, 255, 0.05);
		color: gainsboro;
		font-size: 1.1rem;
		width: 100%;
	}

	.form-input:active,
	.form-input:focus {
		outline: none;
		border-color: var(--color-green);
	}

	.form-input::placeholder {
		color: #9f9f9f;
		font-family: var(--font-family);
	}

	#message {
		padding: 0.75rem 1rem;
		margin: 0.5rem 0;
		border: 2px solid gainsboro;
		border-radius: 10px;
		background-color: rgba(255, 255, 255, 0.05);
		color: gainsboro;
		font-size: 1.1rem;
		width: 100%; /* Ensure textarea takes full width of its container */
		min-height: 10rem; /* min-height to prevent resizing below it */
		resize: vertical;
		font-family: var(--font-family);
	}

	#message:active,
	#message:focus {
		outline: none;
		border-color: var(--color-green);
	}

	#message::placeholder {
		color: #9f9f9f;
	}

	#contact-submit {
		margin-top: 0.5rem;
		padding: 0.75rem 1rem;
		border: 2px solid gainsboro;
		border-radius: 10px;
		background-color: transparent;
		color: gainsboro;
		font-size: 1rem;
		cursor: pointer;
		font-family: var(--font-family);
		display: block; /* Make the button a block element */
		margin-left: auto; /* Center horizontally */
		margin-right: auto; /* Center horizontally */
	}

	#contact-submit:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}

	/* Media queries */
	@media (max-width: 768px) {
		/* Main content styles */
		.contents {
			padding: 0 2rem;
		}

		/* Hero section styles */
		.hero {
			margin: -10rem 1rem 0;
		}
		.hero-heading {
			font-size: 3rem;
		}
		.hero-subheading {
			font-size: 1.5rem;
		}
		.hero-button {
			font-size: 1rem;
			padding: 0.75rem 1.5rem;
		}

		/* Projects section styles */
		.project-container {
			grid-template-columns: 1fr;
		}

		/* Contact section styles */

		.form-row {
			grid-template-columns: 1fr; /* Ensure form groups take full width */
		}

		.form-group {
			margin-top: 0.5rem;
		}
	}

	/* Keyframes for blinking cursor */
	@keyframes blink {
		0%,
		50%,
		100% {
			opacity: 1;
		}
		25%,
		75% {
			opacity: 0;
		}
	}
</style>
