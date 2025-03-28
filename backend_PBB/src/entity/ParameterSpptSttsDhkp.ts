import { Column, Entity } from "typeorm";

@Entity("parameter_sppt_stts_dhkp", { schema: "public" })
export class ParameterSpptSttsDhkp {
  @Column("smallint", { name: "sppt_terpisah" })
  spptTerpisah!: number;

  @Column("smallint", { name: "stts_terpisah" })
  sttsTerpisah!: number;

  @Column("smallint", { name: "dhkp_terpisah" })
  dhkpTerpisah!: number;

  @Column("character varying", { name: "kelompok_buku", length: 2 })
  kelompokBuku!: string;

  @Column("smallint", { name: "tahun_pajak_sppt" })
  tahunPajakSppt!: number;

  @Column("smallint", { name: "tahun_pajak_stts" })
  tahunPajakStts!: number;

  @Column("smallint", { name: "nama_kanwil" })
  namaKanwil!: number;

  @Column("smallint", { name: "nama_kantor" })
  namaKantor!: number;

  @Column("smallint", { name: "kota_terbit" })
  kotaTerbit!: number;

  @Column("smallint", { name: "nama_kepala_kantor" })
  namaKepalaKantor!: number;

  @Column("smallint", { name: "barcode_sppt", nullable: true })
  barcodeSppt!: number | null;

  @Column("character", { name: "jns_barcode_sppt", nullable: true, length: 1 })
  jnsBarcodeSppt!: string | null;

  @Column("smallint", { name: "barcode_stts", nullable: true })
  barcodeStts!: number | null;

  @Column("character", { name: "jns_barcode_stts", nullable: true, length: 1 })
  jnsBarcodeStts!: string | null;

  @Column("smallint", { name: "sppt_form_baru" })
  spptFormBaru!: number;

  @Column("smallint", { name: "stts_form_baru" })
  sttsFormBaru!: number;

  @Column("smallint", { name: "sppt_form_lama" })
  spptFormLama!: number;

  @Column("smallint", { name: "stts_form_lama" })
  sttsFormLama!: number;

  @Column("smallint", { name: "surat_himbauan" })
  suratHimbauan!: number;

  @Column("character varying", {
    name: "buku_himbauan",
    nullable: true,
    length: 2,
  })
  bukuHimbauan!: string | null;

  @Column("smallint", { name: "tunggakan_thn_lalu" })
  tunggakanThnLalu!: number;

  @Column("smallint", { name: "sppt_pbb_nol" })
  spptPbbNol!: number;

  @Column("smallint", { name: "teks_kanwil" })
  teksKanwil!: number;

  @Column("smallint", { name: "teks_kantor" })
  teksKantor!: number;

  @Column("smallint", { name: "teks_sppt" })
  teksSppt!: number;

  @Column("smallint", { name: "teks_stts" })
  teksStts!: number;

  @Column("character varying", { name: "kakap", nullable: true, length: 4 })
  kakap!: string | null;
}
