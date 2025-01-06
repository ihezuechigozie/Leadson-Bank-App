jQuery(document).ready(function ($) {
    var $r = $('input[type="range"]');
    // var $ruler = $('<div class="rangeslider__ruler" />');

    // Initialize
    $r
        .rangeslider({
            polyfill: false,
            onInit: function() {
                var tempItems = getRulerRange(this.min, this.max, this.step);
                var listings = tempItems.map(function(n) {
                    return `<span class="ruler__item"> ${n}</span>`
                }).join('');
                this.$range.prepend(
                    $(`<div class="rangeslider__ruler"> 
                         ${listings}
                        </div>`)
                );
                var $handle = $('.rangeslider__handle', this.$range);
                updateHandle($handle[0], this.value);
                //update input value
                updateInputField($r);
                calculateLoan();
            }
        })
        .on('input', function(e) {
            var $handle = $('.rangeslider__handle', e.target.nextSibling);
            updateHandle($handle[0], this.value);
            //update input value
            var dataIn = $(this).attr('data-input');
            $(`input[name="${dataIn}"]`).val(`${this.value}`)
            // call the calculate function
            calculateLoan();
        });


    function getRulerRange(min, max, step) {
        var range = [];
        var i = 0;
        while (i <= 5) {
            if (step === 0.5) {
                range.push((i * 3));
            } else if (step === 1) {
                // range += (i * 5) + ' ';
                range.push((i * 12));
            }
            i++;
        }
        return range;
    }

    function updateInputField(params) {
        $('input[name="rate_input"]').val(params[0].value);
        $('input[name="amo_input"]').val(params[1].value);
    }

    function updateHandle(el, val) {
        el.textContent = val;
    }


    function formatNum(t) {
        for (var e = t, i = e.split("."), a = i[0], n = i.length > 1 ? '.' + i[1] : "", l = /(\d+)(\d{3})/; l.test(a);) a = a.replace(l, "$1" + "," + "$2");
        return a + n
    }

    function calculateLoan() {
        //get the values of the input field
        // l - loan amount, fp - payment frequency, iR - interest rate , amo - loan duration, m - interest total 
        // sumT - sumTotal of amount + interest total
        var
            // return zero if the loan amount is empty
            L = $('#loanAmt').val() > 0 && $('#loanAmt').val() != " " ? $('#loanAmt').val() : 1,
            //
            amo = $('input[name="amo_input"]').val(),
            iR = parseFloat($('input[name="rate_input"').val()),
            fP = $('input[name="frequency"]:checked').val(),
            n = 0,
            m = parseFloat(L) * iR / 100,
            u = amo, // number of months
            sumT
        if (m > 0) {
            // var sumT = L * (m / (1 - 1 / Math.pow(1 + m, u)));
            sumT = parseFloat(L) + m;
            switch (fP) {
                case "weekly":
                    n = sumT / (amo * 4)
                    break;
                case "monthly":
                default:
                    n = sumT / amo
            }
        }
        updateResult(formatNum(L), iR, fP, amo, n.toFixed(2));
    }

    function updateResult(loanAmt, loanInt, loanFreq, loanAmo, loanRepay) {
        $('.loan__amt').text(loanAmt);
        $('.loan__amo').text(loanAmo);
        $('.loan__int').text(loanInt);
        $('.loan__freq').text(loanFreq);
        $('.loan__pay').text(loanRepay);
    }

    //check for radio button change 
    $('input[type="radio"').on('change', function(e) {
        calculateLoan();
    });
    $('input[type="number"]').on('input', function(e) {
        var $inputRange = ''
        if ($(this).attr("name") === "amo_input") {
            $inputRange = $('#amortization');
            $inputRange.val(this.value).change();
            // call function to update the result
            calculateLoan();
        } else if ($(this).attr("name") === "rate_input") {
            console.log($r[0]);
            $inputRange = $('#interest_rate');
            $inputRange.val(this.value).change();
            //call function to update result
            calculateLoan()
        } else {
            calculateLoan()
        }
    });
});
        