import { Column, Entity, Index } from "typeorm";

@Index("g4_1_ak", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "thnPajakSkpSpop"], { unique: true })
@Index("ttr_skp_spop_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "thnPajakSkpSpop"], { unique: true })
@Entity("ttr_skp_spop", { schema: "public" })
export class TtrSkpSpop {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "kd_kecamatan", length: 3 })
  kdKecamatan!: string;

  @Column("character", { primary: true, name: "kd_kelurahan", length: 3 })
  kdKelurahan!: string;

  @Column("character", { primary: true, name: "kd_blok", length: 3 })
  kdBlok!: string;

  @Column("character", { primary: true, name: "no_urut", length: 4 })
  noUrut!: string;

  @Column("character", { primary: true, name: "kd_jns_op", length: 1 })
  kdJnsOp!: string;

  @Column("character", { primary: true, name: "thn_pajak_skp_spop", length: 4 })
  thnPajakSkpSpop!: string;

  @Column("timestamp without time zone", { name: "tgl_terima_wp_skp_spop" })
  tglTerimaWpSkpSpop!: Date;

  @Column("character varying", {
    name: "nm_yg_menerima_skp_spop",
    nullable: true,
    length: 30,
  })
  nmYgMenerimaSkpSpop!: string | null;

  @Column("timestamp without time zone", {
    name: "tgl_rekam_ttr_skp_spop",
    default: () => "statement_timestamp()",
  })
  tglRekamTtrSkpSpop!: Date;

  @Column("character", { name: "nip_perekam_ttr_skp_spop", length: 18 })
  nipPerekamTtrSkpSpop!: string;
}
