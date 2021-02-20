let $form = $('form#subscription-form'), $submissionCompleteAlert = $('#submissionCompleteAlert'),
    url = 'https://script.google.com/macros/s/AKfycbyySzf4RsZkM7Pbu2NTQEUNc35s26esBUTtk7lgG35JVjdV9yUt/exec';

const confirmationAlert = `<div class="alert alert-success alert-dismissible fade show" role="alert">
Seus dados foram enviados com sucesso!
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
</div>`;

const loadingSpinner = `<div class="spinner-border text_primary align-self-center text-center" role="status">
<span class="sr-only">Loading...</span>
</div>`;

const submissionComplete = () => {
    $form.each(function(){
        this.reset();
    });

    $submissionCompleteAlert.append(confirmationAlert);
    $('.spinner-border').remove();
}

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  let jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    beforeSend: () => $submissionCompleteAlert.append(loadingSpinner),
    data: $form.serializeObject()   
  }).done(() => submissionComplete());
});
