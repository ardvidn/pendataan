import { Column, Entity, Index } from "typeorm";

@Index("e23_2_ak", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "statusPenghapusanPiutang", "thnPajakSppt"], { unique: true })
@Index("penghapusan_piutang_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "thnPajakSppt"], { unique: true })
@Index("e23_1_ak", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "thnPajakSppt"], { unique: true })
@Entity("penghapusan_piutang", { schema: "public" })
export class PenghapusanPiutang {
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

  @Column("character", { name: "no_sk_penghapusan_piutang", length: 30 })
  noSkPenghapusanPiutang!: string;

  @Column("timestamp without time zone", { name: "tgl_sk_penghapusan_piutang" })
  tglSkPenghapusanPiutang!: Date;

  @Column("character", {
    name: "status_penghapusan_piutang",
    length: 1,
    default: () => "'2'",
  })
  statusPenghapusanPiutang!: string;

  @Column("character varying", {
    name: "alasan_penghapusan_piutang",
    nullable: true,
    length: 50,
  })
  alasanPenghapusanPiutang!: string | null;

  @Column("timestamp without time zone", {
    name: "tgl_rekam_penghapusan_piutang",
    default: () => "statement_timestamp()",
  })
  tglRekamPenghapusanPiutang!: Date;

  @Column("character", { name: "nip_rekam_penghapusan_piutang", length: 18 })
  nipRekamPenghapusanPiutang!: string;
}
