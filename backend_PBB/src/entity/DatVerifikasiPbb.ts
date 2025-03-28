import { Column, Entity, Index } from "typeorm";

@Index("dat_verifikasi_pbb_pk", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "thnPajakSppt"], { unique: true })
@Entity("dat_verifikasi_pbb", { schema: "public" })
export class DatVerifikasiPbb {
  @Column("character", { name: "kd_propinsi", nullable: true, length: 2 })
  kdPropinsi!: string | null;

  @Column("character", { name: "kd_dati2", nullable: true, length: 2 })
  kdDati2!: string | null;

  @Column("character", { name: "kd_kecamatan", nullable: true, length: 3 })
  kdKecamatan!: string | null;

  @Column("character", { name: "kd_kelurahan", nullable: true, length: 3 })
  kdKelurahan!: string | null;

  @Column("character", { name: "kd_blok", nullable: true, length: 3 })
  kdBlok!: string | null;

  @Column("character", { name: "no_urut", nullable: true, length: 4 })
  noUrut!: string | null;

  @Column("character", { name: "kd_jns_op", nullable: true, length: 1 })
  kdJnsOp!: string | null;

  @Column("character", { name: "thn_pajak_sppt", nullable: true, length: 4 })
  thnPajakSppt!: string | null;

  @Column("numeric", {
    name: "pbb_yg_harus_dibayar_sppt",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  pbbYgHarusDibayarSppt!: string | null;

  @Column("character", { name: "hasil_konfirmasi", nullable: true, length: 3 })
  hasilKonfirmasi!: string | null;

  @Column("timestamp without time zone", {
    name: "tgl_verifikasi_pbb",
    nullable: true,
  })
  tglVerifikasiPbb!: Date | null;

  @Column("character", { name: "nip_petugas", nullable: true, length: 30 })
  nipPetugas!: string | null;

  @Column("character", { name: "thn_konfirmasi", nullable: true, length: 4 })
  thnKonfirmasi!: string | null;

  @Column("timestamp without time zone", {
    name: "tgl_jatuh_tempo_sppt",
    nullable: true,
  })
  tglJatuhTempoSppt!: Date | null;
}
