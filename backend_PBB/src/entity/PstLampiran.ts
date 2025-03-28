import { Column, Entity, Index } from "typeorm";

@Index("pst_lampiran_pkey", ["bundelPelayanan", "kdKantor", "kdKanwil", "noUrutPelayanan", "thnPelayanan"], { unique: true })
@Entity("pst_lampiran", { schema: "public" })
export class PstLampiran {
  @Column("character", { primary: true, name: "kd_kanwil", length: 2 })
  kdKanwil!: string;

  @Column("character", { primary: true, name: "kd_kantor", length: 2 })
  kdKantor!: string;

  @Column("character", { primary: true, name: "thn_pelayanan", length: 4 })
  thnPelayanan!: string;

  @Column("character", { primary: true, name: "bundel_pelayanan", length: 4 })
  bundelPelayanan!: string;

  @Column("character", { primary: true, name: "no_urut_pelayanan", length: 3 })
  noUrutPelayanan!: string;

  @Column("smallint", {
    name: "l_permohonan",
    nullable: true,
    default: () => "0",
  })
  lPermohonan!: number | null;

  @Column("smallint", {
    name: "l_surat_kuasa",
    nullable: true,
    default: () => "0",
  })
  lSuratKuasa!: number | null;

  @Column("smallint", { name: "l_ktp_wp", nullable: true, default: () => "0" })
  lKtpWp!: number | null;

  @Column("smallint", {
    name: "l_sertifikat_tanah",
    nullable: true,
    default: () => "0",
  })
  lSertifikatTanah!: number | null;

  @Column("smallint", { name: "l_sppt", nullable: true, default: () => "0" })
  lSppt!: number | null;

  @Column("smallint", { name: "l_imb", nullable: true, default: () => "0" })
  lImb!: number | null;

  @Column("smallint", {
    name: "l_akte_jual_beli",
    nullable: true,
    default: () => "0",
  })
  lAkteJualBeli!: number | null;

  @Column("smallint", {
    name: "l_sk_pensiun",
    nullable: true,
    default: () => "0",
  })
  lSkPensiun!: number | null;

  @Column("smallint", {
    name: "l_sppt_stts",
    nullable: true,
    default: () => "0",
  })
  lSpptStts!: number | null;

  @Column("smallint", { name: "l_stts", nullable: true, default: () => "0" })
  lStts!: number | null;

  @Column("smallint", {
    name: "l_sk_pengurangan",
    nullable: true,
    default: () => "0",
  })
  lSkPengurangan!: number | null;

  @Column("smallint", {
    name: "l_sk_keberatan",
    nullable: true,
    default: () => "0",
  })
  lSkKeberatan!: number | null;

  @Column("smallint", {
    name: "l_skkp_pbb",
    nullable: true,
    default: () => "0",
  })
  lSkkpPbb!: number | null;

  @Column("smallint", {
    name: "l_spmkp_pbb",
    nullable: true,
    default: () => "0",
  })
  lSpmkpPbb!: number | null;

  @Column("smallint", {
    name: "l_lain_lain",
    nullable: true,
    default: () => "0",
  })
  lLainLain!: number | null;

  @Column("smallint", {
    name: "l_sket_tanah",
    nullable: true,
    default: () => "0",
  })
  lSketTanah!: number | null;

  @Column("smallint", {
    name: "l_sket_lurah",
    nullable: true,
    default: () => "0",
  })
  lSketLurah!: number | null;

  @Column("smallint", { name: "l_npwpd", nullable: true, default: () => "0" })
  lNpwpd!: number | null;

  @Column("smallint", {
    name: "l_penghasilan",
    nullable: true,
    default: () => "0",
  })
  lPenghasilan!: number | null;

  @Column("smallint", { name: "l_cagar", nullable: true, default: () => "0" })
  lCagar!: number | null;
}
