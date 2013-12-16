---
layout: post
title: Powered By Sandra Snow
category: blogging
---

Welcome to my new blog. I've wanted to have a blog for a while, but I hesitated because I thought it would take a lot of effort to get started.

Now that I've done it, I can say, yep, it really was a pain!

There are three reasons creating this blog was hard:

1. I started from nothing.
2. I wanted a solution that would give me full control over my content.
3. I didn't want to pay for hosting.

#Going from zero to blog in...many hours#

I had to make a number of tough decisions along the way. Here are some of them:

1. What should my domain be? [devuxer.com](http://www.devuxer.com) 
2. Which domain registrar should I use? [Namecheap](https://www.namecheap.com/)
3. Who should be my web host? [GitHub](https://github.com/)
4. How will I generate my blog? [Sandra Snow](https://github.com/Sandra/Sandra.Snow)

There were also decisions within decisions. For example, Namecheap offers [WhoisGuard](http://www.whoisguard.com/) free for one year. The idea behind WhoisGuard is that it keeps your personal contact information hidden from anyone trying to find out who owns your domain. Apparently, some feel this type of thing makes it easier for [scammers to hide their identity](http://www.hostingdiscussion.com/domain-name-issues/10374-why-should-we-pay-whois-guard.html), however, not hiding it can result in spam. I left it deactivated for about three days. Then I got my first piece of spam relating to my domain. That was the end of my experiment with not using WhoisGuard.

#Sandra Snow#

Once I decided I wanted to host my blog on GitHub, I spent quite a bit of time reading about and fiddling with Github Pages, Jekyll, and Jekyll Bootstrap. I really liked the idea of writing my posts in markdown, then running some code that magically turns them into a blog, but I was getting bogged down in the details of how to actually set everything up. I also kept reading things like:

> GitHub cannot afford to run arbitrary code on their servers so they lock developers down via Liquid. Liquid is not programmer-friendly.

At some point, not really expecting anything to come of it, I hopped on [JabbR](https://jabbr.net/) and said:

> YU so confusing, Jekyll?

Phillip Haydon responded:

> Use Snow 

That's when things started to get easier. (Not quite easy, but definitely easier.) Rather than a Ruby solution like Jekyll, Sandra.Snow is a .NET solution. If I needed to debug anything (I did), I already had all the tools and at least some of the know-how. And instead of the dreaded Liquid, I would get to use good ol' Razor templates.

#A Snow step-by-step#

1. Pretend you are going to use GitHub Pages:
    * Create a new repository in GitHub called your-domain (e.g., devuxer.com).
        * Enter a description (e.g., My blog).
        * Don't worry about a README (I didn't bother with it and nothing bad happened to me).
    * Go into the settings for the repository:
        * Click "Automatic Page Generator".
        * Click "Continue to Layouts" (don't bother editing the page).
        * Choose the MINIMAL layout (actually, it doesn't matter).
        * Click PUBLISH.
    * You should now have a gh-pages branch.
2. "Haha, I was just kidding":
    * Install [GitHub for Windows](http://windows.github.com/), if necessary.
    * Go back to your browser and click "Clone In Desktop".
    * In Windows Explorer, delete everything except the .git folder from your working directory.
    * Commit changes.
3. Replace all that stuff with the Sandra Snow Template:
    * Browse to the [Sandra Snow Template](https://github.com/Sandra/Sandra.Snow.SnowTemplate).
    * Click "Clone in Desktop".
    * In Windows Explorer, copy everything (except the .git folder) from the working directory of the template to the working directory of your blog.
    * Run compile.snow.bat to generate all the folders and files.
    * Commit changes.
4. Replace anything that begins with "phill" with your own info:
    * Files you will almost certainly want to edit:
        * Root directory: CNAME
        * Snow directory: about.cshtml, rss.xml, snow.config
        * Snow\_layouts directory: default.cshtml
    * Run compile.snow.bat again to generate the site.
    * Commit changes.
5. Tell your domain registrar to redirect all web traffic to GitHub:
    * Log in to Namecheap (or whoever sold you your domain).
    * Navigate to the management screen for your domain.
    * Click URL Forwarding (or whatever your registrar calls it).
    * Set up your redirect to go from your domain to:
        * Record Type = A (Address)
        * IP Address/URL = 204.232.175.78
        * TTL = 3259.
6. Set up [Disqus](http://disqus.com/) to handle your comments:
    * Create a Disqus account, in necessary.
    * Click "Add Disqus to Your Site".
    * Follow the prompts until you get to a "Choose your platform" page, then stop.
    * Open your blog's working directory, locate Snow\_layouts\Post.cshtml, and replace `*disqus id*` with your site's Disqus shortname (e.g., devuxer).
    * Commit changes.
7. Replace all the sample posts with what will become your first post:
    * Download [MarkdownPad](http://markdownpad.com/), if necessary.
    * Go to your working directory and delete all but one of the posts in Snow\_posts.
    * Rename the file with the correct date and title.
    * Open the file in MarkdownPad and commence blogging!
    * Run compile.snow.bat again to generate the site.
    * Commit and sync to GitHub.
    * Look for your updated blog to appear in 10 minutes or less.
8. Do some things I haven't done yet:
    * Edit the theme to give your blog a unique look and feel.
    * Make sure people are actually able to leave a comment.


#Conclusion#

If you want a blog that's truly your own, it's going to take some work to set up. If your situation is similar to mine, hopefully, I've at least spared you some of the struggle. Regardless, once you get over the hump of setting things up, it will be smooth sailing. At least, that's the idea.