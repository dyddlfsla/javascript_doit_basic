		var numbers = [2, 4, 6, 8, 10];
		showArray(numbers);
		pushLastSum(numbers);
		showArray(numbers);

		function pushLastSum(array) {
			var sum = 0;
			for (var i = 0; i < numbers.length; i++) {
				sum += numbers[i];
			}
			numbers.push(sum);
		}

		function showArray(array) {
			var str = "<table><tr>";
			for (var i=0; i<array.length; i++) {
				str += "<td>" + array[i] + "</td>";
			}
			str += "</tr></table>";
			document.write(str);
		}
