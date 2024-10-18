using System;
using System.ComponentModel.DataAnnotations;

namespace EmprestimoLivros.Models
{
    public class EmprestimoModel
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Nome do recebedor - Preenchimento obrigatório!")]
        public string Recebedor { get; set; }

        [Required(ErrorMessage = "Nome do fornecedor - Preenchimento obrigatório!")]
        public string Fornecedor { get; set; }

        [Required(ErrorMessage = "Livro emprestado - Preenchimento obrigatório!")]
        public string LivroEmprestado { get; set; }

        public DateTime DataUltimaAtualizacao { get; set; } = DateTime.Now;
    }
}
