var clickNode;

function master(url) {
	masterListJSON = d3.json(url, function(err, data) {
		// template of master avator
		var tempMaster = '<div class="ui dimmer"><div class="content"><div class="center"><h2 class="ui inverted header"></h2><p></p></div></div></div><img class="ui image" src="">';

		var master = d3.select("div.ui.inverted.segment .masterList").selectAll("div")
				.data(data)
			.enter().append("div")
				.attr("class", "ui medium image")
				.html(tempMaster);

		master.select("img.image")
			.attr("src", function(d) {return d.photo;} )
		master.select("div.center h2").text(function(d) {return d.name;} )
		master.select("div.center p").text(function(d) {return d.info;} );


		$('.inverted.segment .image').dimmer({
		    on: 'hover'
		  });
	});

	masterJSON = d3.json(url, function(error, data) {
		var master = d3.selectAll("div.ui.medium.image.dimmable")
			.on("click", function(d) {
				if (d.name == d3.select(this).select("h2").text()) {
					// Clean up
					clkNode[0] = null;
					clkNode[1] = null;
					d3.selectAll("g.node circle")
						.style("fill", "#FFFFFF")
						.style("stroke", "steelblue");
					lightup(d.sklist);
				};
				})
			});

	function lightup(skill) {
		skill.forEach(function(s) {
			d3.select("g#S" + s + " circle").style("fill", "steelblue");
		})
	};
};
