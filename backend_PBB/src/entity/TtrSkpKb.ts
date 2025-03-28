import { Column, Entity, Index } from "typeorm";

@Index("ttr_skp_kb_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "thnPajakSkpKb"], { unique: true })
@Index("g6_1_ak", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "thnPajakSkpKb"], { unique: true })
@Entity("ttr_skp_kb", { schema: "public" })
export class TtrSkpKb {
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

  @Column("character", { primary: true, name: "thn_pajak_skp_kb", length: 4 })
  thnPajakSkpKb!: string;

  @Column("timestamp without time zone", { name: "tgl_terima_wp_skp_kb" })
  tglTerimaWpSkpKb!: Date;

  @Column("character varying", {
    name: "nm_yg_menerima_skp_kb",
    nullable: true,
    length: 30,
  })
  nmYgMenerimaSkpKb!: string | null;

  @Column("timestamp without time zone", {
    name: "tgl_rekam_ttr_skp_kb",
    default: () => "statement_timestamp()",
  })
  tglRekamTtrSkpKb!: Date;

  @Column("character", { name: "nip_perekam_ttr_skp_kb", length: 18 })
  nipPerekamTtrSkpKb!: string;
}
