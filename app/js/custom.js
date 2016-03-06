$(document).ready(function() {
    function toggleSpeaker(speakers) {
        return function(event) {
            var element = $(this);

            // Find relevant regions
            var currentSpeaker = $(element.attr("href"));
            var activePlaylistOption = speakers.find(".playlist .active");
            var videoSectionActive = speakers.find('.archive-video.active');
            var iframeParent = currentSpeaker.find(".embed-responsive");

            // Toggle playlist active
            activePlaylistOption.removeClass("active");
            element.addClass("active");

            // Toggle video area
            currentSpeaker.removeClass("hide").addClass("active");
            videoSectionActive.removeClass("active").addClass("hide");

            // Load video if necessary
            if (currentSpeaker.data("video_loaded") != "true") {
                iframeParent.html(
                        '<iframe class="embed-responsive-item" ' + 
                        'src="' + iframeParent.data("video") + '" ' +
                        'allowfullscreen></iframe>');

                currentSpeaker.data("video_loaded", "true");
            }

            // Suppressing jumping/adding fragment to URL
            event.preventDefault();
        }
    }

    function setupArchiveSpeakerPlaylist() {
        var speakers = $(this);

        // Conceal all but the initially active div
        speakers.find('.archive-video').addClass("hide");
        speakers.find('.archive-video.active').removeClass("hide");

        // Attach event handlers to playlist items
        speakers.find(".playlist a").click(toggleSpeaker(speakers));
    }

    $(".archive-speakers-container").each(setupArchiveSpeakerPlaylist);
});
