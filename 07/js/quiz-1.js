		var numbers = [2, 4, 6, 8, 10];
		var sumOfNumbers = function() {
			var sum = 0;
			for (var i = 0; i < numbers.length; i++) {
				sum += numbers[i];
			}
			return sum;
		}
		numbers.push(sumOfNumbers());
		showArray(numbers);

		function showArray(arr) {
			var str = "<table><tr>";
			for (var i=0; i<arr.length; i++) {
				str += "<td>" + arr[i] + "</td>";
			}
			str += "</tr></table>";
			document.write(str);
		}