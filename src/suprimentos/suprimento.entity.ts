/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('GE484')
export class GE484 {

   @PrimaryColumn({ name: 'NUM_RECEBIMENTO', type: 'varchar2' })
   num_recebimento: string;

   @Column({ name: 'COD_MOV_RECEBIMENTO', type: 'varchar2' })
   cod_mov_recebimento: string;

   @Column({ name: 'COD_EMPRESA', type: 'varchar2' })
   cod_empresa: string

   @Column({ name: 'DAT_RECEBIMENTO', type: 'date' })
   dat_recebimento: Date

   @Column({ name: 'NUM_PEDIDO', type: 'varchar2' })
   num_pedido: string

   @Column({ name: 'COD_FORNECEDOR', type: 'varchar2' })
   cod_fornecedor: string

   @Column({ name: 'COD_ID_DOCUMENTO', type: 'varchar2' })
   cod_id_documento: string

   @Column({ name: 'COD_DOCUMENTO', type: 'varchar2' })
   cod_documento: string

   @Column({ name: 'DAT_DOCUMENTO', type: 'date' })
   dat_documento: Date

   @Column({ name: 'DAT_VENCTO_1', type: 'date' })
   dat_vencto_1: Date

   @Column({ name: 'DAT_VENCTO_2', type: 'date' })
   dat_vencto_2: Date

   @Column({ name: 'DAT_VENCTO_3', type: 'date' })
   dat_vencto_3: Date

   @Column({ name: 'VAL_VENCTO_1', type: 'int' })
   val_vencto_1: BigInteger

   @Column({ name: 'VAL_VENCTO_2', type: 'int' })
   val_vencto_2: BigInteger

   @Column({ name: 'VAL_VENCTO_3', type: 'int' })
   val_vencto_3: BigInteger

   @Column({ name: 'VAL_RECEBIMENTO', type: 'int' })
   val_recebimento: BigInteger

   @Column({ name: 'VAL_IPI', type: 'int' })
   val_ipi: BigInteger

   @Column({ name: 'VAL_ICM', type: 'int' })
   val_icm: BigInteger

   @Column({ name: 'VAL_IRRF', type: 'int' })
   val_irrf: BigInteger

   @Column({ name: 'VAL_ISS', type: 'int' })
   val_iss: BigInteger

   @Column({ name: 'VAL_INSS', type: 'int' })
   val_inss: BigInteger

   @Column({ name: 'COD_CENTRO_CUSTO', type: 'varchar2' })
   cod_centro_custo: string

   @Column({ name: 'DES_OBSERVACAO', type: 'varchar2' })
   des_observacao: string

   @Column({ name: 'DAT_INTEGRA_CONTABIL', type: 'date' })
   dat_integra_contabil: Date

   @Column({ name: 'COD_FILIAL', type: 'varchar2' })
   cod_filial: string

   @Column({ name: 'DAT_RECEBIMENTO_FISICO', type: 'date' })
   dat_recebimento_fisico: Date

   @Column({ name: 'FLG_PRE_RECEBIMENTO', type: 'varchar2' })
   flg_pre_recebimento: string

   @Column({ name: 'VAL_ALIQUOTA_ICMS', type: 'int' })
   val_aliquota_icms: BigInteger

   @Column({ name: 'COD_OPER_COMERCIAL', type: 'varchar2' })
   cod_oper_comercial: string

   @Column({ name: 'VAL_REDUCAO_ICMS', type: 'int' })
   val_reducao_icms: BigInteger

   @Column({ name: 'VAL_BASE_ICMS', type: 'int' })
   val_base_icms: BigInteger

   @Column({ name: 'COD_OPERADOR_INCLUSAO', type: 'varchar2' })
   cod_operador_inclusao: string

   @Column({ name: 'NUM_RECEBIMENTO_CANCELAMENTO', type: 'varchar2' })
   num_recebimento_cancelamento: string

   @Column({ name: 'FLG_INT_LIVRO_FISCAL', type: 'varchar2' })
   flg_int_livro_fiscal: string

   @Column({ name: 'VAL_CREDITO_PIS', type: 'int' })
   val_credito_pis: BigInteger

   @Column({ name: 'NUM_QUALIDADE_AVALIACAO', type: 'int' })
   num_qualidade_avaliacao: BigInteger

   @Column({ name: 'NUM_PONTUALIDADE_AVALIACAO', type: 'int' })
   num_pontualidade_avaliacao: BigInteger

   @Column({ name: 'NUM_QUANTIDADE_AVALIACAO', type: 'int' })
   num_quantidade_avaliacao: BigInteger

   @Column({ name: 'NUM_TOTAL_AVALIACAO', type: 'int' })
   num_total_avaliacao: BigInteger

   @Column({ name: 'FLG_AVALIADO', type: 'varchar2' })
   flg_avaliado: string

   @Column({ name: 'NUM_RECEBIMENTO_ENTRADA', type: 'varchar2' })
   num_recebimento_entrada: string

   @Column({ name: 'VAL_CREDITO_COFINS', type: 'int' })
   val_credito_cofins: BigInteger

   @Column({ name: 'VAL_TAXA_CONVERSAO', type: 'int' })
   val_taxa_conversao: BigInteger

   @Column({ name: 'FLG_RECEBIMENTO_PLANILHA', type: 'varchar2' })
   flg_recebimento_planilha: string

   @Column({ name: 'COD_OPERADOR', type: 'varchar2' })
   cod_operador: string

   @Column({ name: 'DAT_MANUTENCAO', type: 'date' })
   dat_manutencao: Date

   @Column({ name: 'VAL_CSLL', type: 'int' })
   val_csll: BigInteger

   @Column({ name: 'VAL_DESPESAS', type: 'int' })
   val_despesas: BigInteger

   @Column({ name: 'NUM_RECEBIMENTO_REF', type: 'varchar2' })
   num_recebimento_ref: string

   @Column({ name: 'DAT_INTEGRA_C_PAGAR', type: 'date' })
   dat_integra_c_pagar: Date

   @Column({ name: 'COD_PRODUTO_KIT', type: 'varchar2' })
   cod_produto_kit: string

   @Column({ name: 'QTD_KIT', type: 'int' })
   qtd_kit: BigInteger

   @Column({ name: 'COD_LOCALIZACAO_LOTE', type: 'varchar2' })
   cod_localizacao_lote: string

   @Column({ name: 'COD_PRODUTO_INTERMEDIARIO', type: 'varchar2' })
   cod_produto_intermediario
      : string

   @Column({ name: 'FLG_ESTRUTURA', type: 'varchar2' })
   flg_estrutura
      : string

   @Column({ name: 'VAL_RECEBIMENTO_US', type: 'int' })
   val_recebimento_us
      : BigInteger

   @Column({ name: 'VAL_BASE_PISCOFINS', type: 'int' })
   val_base_piscofins
      : BigInteger

   @Column({ name: 'NUM_INVOICE', type: 'varchar2' })
   num_invoice
      : string

   @Column({ name: 'DAT_ESTOQUE', type: 'date' })
   dat_estoque
      : Date

   @Column({ name: 'DAT_INCLUSAO', type: 'date' })
   dat_inclusao
      : Date

   @Column({ name: 'RECV_NO', type: 'int' })
   recv_no
      : BigInteger

   @Column({ name: 'VAL_TOTAL_PRODUTO', type: 'int' })
   val_total_produto
      : BigInteger

   @Column({ name: 'VAL_TOTAL_NF', type: 'int' })
   val_total_nf
      : BigInteger

   @Column({ name: 'VAL_FRETE', type: 'int' })
   val_frete
      : BigInteger

   @Column({ name: 'VAL_SEGURO', type: 'int' })
   val_seguro
      : BigInteger

   @Column({ name: 'VAL_BC_ICMS', type: 'int' })
   val_bc_icms
      : BigInteger

   @Column({ name: 'VAL_BC_PIS', type: 'int' })
   val_bc_pis
      : BigInteger

   @Column({ name: 'VAL_BC_COFINS', type: 'int' })
   val_bc_cofins
      : BigInteger

   @Column({ name: 'VAL_BC_IPI', type: 'int' })
   val_bc_ipi
      : BigInteger

   @Column({ name: 'VAL_PIS', type: 'int' })
   val_pis
      : BigInteger

   @Column({ name: 'VAL_COFINS', type: 'int' })
   val_cofins
      : BigInteger

   @Column({ name: 'VAL_II', type: 'int' })
   val_ii
      : BigInteger

   @Column({ name: 'VAL_TAXA', type: 'int' })
   val_taxa
      : BigInteger

   @Column({ name: 'VAL_ALIQ_PIS', type: 'int' })
   val_aliq_pis
      : BigInteger

   @Column({ name: 'VAL_ALIQ_COFINS', type: 'int' })
   val_aliq_cofins
      : BigInteger

   @Column({ name: 'DES_CONTROLE', type: 'varchar2' })
   des_controle
      : string

   @Column({ name: 'NUM_DI', type: 'varchar2' })
   num_di
      : string

   @Column({ name: 'TIP_RECEBIMENTO', type: 'varchar2' })
   tip_recebimento
      : string

   @Column({ name: 'NUM_LANCAMENTO', type: 'int' })
   num_lancamento
      : BigInteger

   @Column({ name: 'TIP_TRIBUTACAO_PISCOFINS', type: 'varchar2' })
   tip_tributacao_piscofins
      : string

   @Column({ name: 'TIP_DI', type: 'varchar2' })
   tip_di
      : string

   @Column({ name: 'PO_NO', type: 'varchar2' })
   po_no
      : string

   @Column({ name: 'NUM_CHAVE_NFE', type: 'varchar2' })
   num_chave_nfe
      : string

   @Column({ name: 'COD_SERIE_NF', type: 'varchar2' })
   cod_serie_nf
      : string

   @Column({ name: 'DES_ESTORNO', type: 'varchar2' })
   des_estorno
      : string

   @Column({ name: 'NUM_OENF', type: 'varchar2' })
   num_oenf
      : string

   @Column({ name: 'FLG_XML', type: 'varchar2' })
   flg_xml
      : string

   @Column({ name: 'VIA', type: 'varchar2' })
   via
      : string

   @Column({ name: 'NUM_CHAVE_NFE_REF', type: 'varchar2' })
   num_chave_nfe_ref
      : string

   @Column({ name: 'DAT_PTAX_USD', type: 'date' })
   dat_ptax_usd
      : Date

   @Column({ name: 'VAL_PTAX_USD', type: 'int' })
   val_ptax_usd
      : BigInteger

   @Column({ name: 'VAL_VENCTO_1_USD', type: 'int' })
   val_vencto_1_usd
      : BigInteger

   @Column({ name: 'VAL_VENCTO_2_USD', type: 'int' })
   val_vencto_2_usd
      : BigInteger

   @Column({ name: 'VAL_VENCTO_3_USD', type: 'int' })
   val_vencto_3_usd
      : BigInteger

   @Column({ name: 'VAL_RECEBIMENTO_USD', type: 'int' })
   val_recebimento_usd
      : BigInteger

   @Column({ name: 'VAL_IPI_USD', type: 'int' })
   val_ipi_usd
      : BigInteger

   @Column({ name: 'VAL_ICM_USD', type: 'int' })
   val_icm_usd
      : BigInteger

   @Column({ name: 'VAL_IRRF_USD', type: 'int' })
   val_irrf_usd
      : BigInteger

   @Column({ name: 'VAL_ISS_USD', type: 'int' })
   val_iss_usd
      : BigInteger

   @Column({ name: 'VAL_INSS_USD', type: 'int' })
   val_inss_usd
      : BigInteger

   @Column({ name: 'VAL_REDUCAO_ICMS_USD', type: 'int' })
   val_reducao_icms_usd
      : BigInteger

   @Column({ name: 'VAL_BASE_ICMS_USD', type: 'int' })
   val_base_icms_usd
      : BigInteger

   @Column({ name: 'VAL_CREDITO_PIS_USD', type: 'int' })
   val_credito_pis_usd
      : BigInteger

   @Column({ name: 'VAL_CREDITO_COFINS_USD', type: 'int' })
   val_credito_cofins_usd
      : BigInteger

   @Column({ name: 'VAL_CSLL_USD', type: 'int' })
   val_csll_usd
      : BigInteger

   @Column({ name: 'VAL_DESPESAS_USD', type: 'int' })
   val_despesas_usd
      : BigInteger

   @Column({ name: 'VAL_BASE_PISCOFINS_USD', type: 'int' })
   val_base_piscofins_usd
      : BigInteger

   @Column({ name: 'VAL_TOTAL_PRODUTO_USD', type: 'int' })
   val_total_produto_usd
      : BigInteger

   @Column({ name: 'VAL_TOTAL_NF_USD', type: 'int' })
   val_total_nf_usd
      : BigInteger

   @Column({ name: 'VAL_FRETE_USD', type: 'int' })
   val_frete_usd
      : BigInteger

   @Column({ name: 'VAL_SEGURO_USD', type: 'int' })
   val_seguro_usd
      : BigInteger

   @Column({ name: 'VAL_BC_ICMS_USD', type: 'int' })
   val_bc_icms_usd
      : BigInteger

   @Column({ name: 'VAL_BC_PIS_USD', type: 'int' })
   val_bc_pis_usd
      : BigInteger

   @Column({ name: 'VAL_BC_COFINS_USD', type: 'int' })
   val_bc_cofins_usd
      : BigInteger

   @Column({ name: 'VAL_BC_IPI_USD', type: 'int' })
   val_bc_ipi_usd
      : BigInteger

   @Column({ name: 'VAL_PIS_USD', type: 'int' })
   val_pis_usd
      : BigInteger

   @Column({ name: 'VAL_COFINS_USD', type: 'int' })
   val_cofins_usd
      : BigInteger

   @Column({ name: 'VAL_II_USD', type: 'int' })
   val_ii_usd
      : BigInteger

   @Column({ name: 'VAL_TAXA_USD', type: 'int' })
   val_taxa_usd
      : BigInteger

   @Column({ name: 'NUM_LANCAMENTO_USD', type: 'int' })
   num_lancamento_usd
      : BigInteger

   @Column({ name: 'COD_OPERADOR_PTAX', type: 'varchar2' })
   cod_operador_ptax
      : string

   @Column({ name: 'DAT_MANUTENCAO_PTAX', type: 'date' })
   dat_manutencao_ptax
      : Date

   @Column({ name: 'VAL_DI_DESPESA_USD', type: 'int' })
   val_di_despesa_usd
      : BigInteger

   @Column({ name: 'DAT_INTEGRA_CONTABIL_USD', type: 'date' })
   dat_integra_contabil_usd
      : Date

   @Column({ name: 'VAL_BASE_ICMS_ST', type: 'int' })
   val_base_icms_st
      : BigInteger

   @Column({ name: 'VAL_ALIQ_ICMS_ST', type: 'int' })
   val_aliq_icms_st
      : BigInteger

   @Column({ name: 'VAL_ICMS_ST', type: 'int' })
   val_icms_st
      : BigInteger

   @Column({ name: 'FLG_TRANSFER_PRICE', type: 'varchar2' })
   flg_transfer_price
      : string

   @Column({ name: 'PAYMENT_NO', type: 'varchar2' })
   payment_no
      : string

   @Column({ name: 'COD_SIT', type: 'varchar2' })
   cod_sit
      : string

   @Column({ name: 'FLG_NCONTAB', type: 'varchar2' })
   flg_ncontab
      : string

   @Column({ name: 'VAL_DESCONTO', type: 'int' })
   val_desconto
      : BigInteger

   @Column({ name: 'VAL_MERCADORIA', type: 'int' })
   val_mercadoria
      : BigInteger

   @Column({ name: 'VAL_ICMS_DESON', type: 'int' })
   val_icms_deson
      : BigInteger

   @Column({ name: 'VAL_OUTROS', type: 'int' })
   val_outros
      : BigInteger

}