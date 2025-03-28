import { Column, Entity, Index } from "typeorm";

@Index("ttr_sppt_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "thnPajakSppt"], { unique: true })
@Index("g2_1_ak", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "thnPajakSppt"], { unique: true })
@Entity("ttr_sppt", { schema: "public" })
export class TtrSppt {
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

  @Column("character", { primary: true, name: "thn_pajak_sppt", length: 4 })
  thnPajakSppt!: string;

  @Column("timestamp without time zone", { name: "tgl_terima_wp_sppt" })
  tglTerimaWpSppt!: Date;

  @Column("character varying", {
    name: "nm_yg_menerima_sppt",
    nullable: true,
    length: 30,
  })
  nmYgMenerimaSppt!: string | null;

  @Column("timestamp without time zone", {
    name: "tgl_rekam_ttr_sppt",
    default: () => "statement_timestamp()",
  })
  tglRekamTtrSppt!: Date;

  @Column("character", { name: "nip_rekam_ttr_sppt", length: 18 })
  nipRekamTtrSppt!: string;

  @Column("character varying", { name: "userid", nullable: true, length: 20 })
  userid!: string | null;
}
